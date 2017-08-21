import React, { Component } from 'react';

function DiffBox(props){
  const isHighlighted = props.isHighlighted;
  return(
    <div className={
      ["difficulty-box", isHighlighted && "difficulty-highlighted"].filter(e => !!e).join(' ')
    }>
      <h3>{props.name}</h3>
      <h5>{props.desc}</h5>
    </div>
  );
}

export default DiffBox;