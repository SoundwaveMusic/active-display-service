import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Display from './components/app.js';

let newRandomId = '000'.concat(Math.floor(Math.random() * 16)).slice(-3);

$.ajax({
  method: "GET",
  url: `http://ec2-13-56-149-18.us-west-1.compute.amazonaws.com/4500000${newRandomId}`,
  success: (songData) => {
    ReactDOM.render(<Display songData={songData[0]}/>, document.getElementById('Display'));
  },
  failure: () => {
    ReactDOM.render(<div><h1>Whoops! There was an error retrieving this song from our database</h1></div>, document.getElementById('Display'));  
  },
});
