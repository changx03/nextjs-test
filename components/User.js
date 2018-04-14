import React from 'react';

const user = props => (
  <div>
    <h1>{props.name}</h1>
    <p>Comments: {props.comment}</p>
  </div>
);

export default user;
