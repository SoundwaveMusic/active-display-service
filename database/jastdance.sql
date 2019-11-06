-- This files documents queries used for Postgres & Cassandra

--------------
-- POSTGRES --
--------------

-- READ TEST

explain (analyze,buffers)
SELECT *
FROM songs
LEFT JOIN comments
ON songs.id = comments.songid
WHERE songs.id = 6843213;

-- INSERT TEST

explain (analyze,buffers)
INSERT INTO comments(songid, username, avatar, comment, commenttimestampinseconds)
VALUES (9900001, 'thomasij813', 'http://www.url.com', 'this is a comment', 5);

-- UPDATE TEST

explain (analyze,buffers)
UPDATE comments
SET username = 'thomasij813'
WHERE id = 43668576;

-- DELETE TEST

explain (analyze,buffers)
DELETE FROM comments
WHERE id = 44981896;

-- GET LAST RECORD

SELECT *
FROM comments
ORDER BY id desc
LIMIT 1;

---------------
-- CASSANDRA --
---------------

-- READ TEST

SELECT * FROM songs WHERE songid = 6843213;

-- CREATE TEST

INSERT INTO songs (
  songid,
  commentid,
  username,
  avatar,
  comment,
  commenttimestampinseconds
) VALUES (
  9900001,
  4,
  'thomasij813',
  'http://avatar-url',
  'comment',
  0
);

-- UPDATE TEST

UPDATE songs
SET comment = 'new comment'
WHERE songid = 9342001 AND commentid = 1;

-- DELETE TEST

DELETE FROM songs
WHERE songid = 153443 AND commentid = 1;