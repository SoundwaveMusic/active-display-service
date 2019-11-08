const pool = require('../connection.js');

const getCommentsBySongId = (req, res, next) => {
  const queryString = 'SELECT * FROM songs LEFT JOIN comments ON songs.id = comments.songid WHERE songs.id = $1'
  const values = [req.params.songId];
  pool.query(queryString, values)
    .then((queryResponse) => res.json(queryResponse.rows))
    .catch((err) => next(err));
};

const getCommentById = (req, res, next) => {
  const queryString = 'SELECT * FROM comments WHERE id = $1';
  const values = [req.params.commentId];
  pool.query(queryString, values)
    .then((queryResponse) => res.json(queryResponse.rows))
    .catch((err) => next(err));
};

const createComment = (req, res, next) => {
  const queryString = `
    INSERT INTO comments (songid, username, avatar, comment, commenttimestampinseconds) VALUES ($1, $2, $3, $4, $5) RETURNING *`;

  const values = [
    req.body.songId,
    req.body.username,
    req.body.avatar,
    req.body.comment,
    req.body.commenttimestampinseconds
  ];

  pool.query(queryString, values)
    .then((queryResponse) => res.json(queryResponse.rows))
    .catch((err) => next(err));
};

const prepareUpdateQueryString = (id, updateObject) => {
  let setStatement = 'SET ';

  Object.keys(updateObject).forEach((key, i) => {
    const updateValue = (key !== 'commenttimestampinseconds') ?
      `'${updateObject[key]}'` :
      `${updateObject[key]}`;

    let updateString = `${key} = ${updateValue}`;

    if (i !== Object.keys(updateObject).length - 1) {
      updateString += ',';
    }

    setStatement += updateString;
  });

  const queryString = `UPDATE comments ${setStatement} WHERE id = ${id} RETURNING *`;

  return queryString;
};

const updateComment = (req, res, next) => {
  const queryString = prepareUpdateQueryString(req.params.commentId, req.body);
  pool.query(queryString)
    .then((queryResponse) => res.json(queryResponse.rows))
    .catch((err) => next(err));
};

const deleteComment = (req, res, next) => {
  const queryString = 'DELETE FROM comments WHERE id = $1';
  const values = [req.params.commentId];
  pool.query(queryString, values)
    .then(() => res.status(204).send())
    .catch((err) => next(err));
};

module.exports = {
  getCommentsBySongId,
  getCommentById,
  createComment,
  updateComment,
  deleteComment
};
