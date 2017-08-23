import React from 'react';
import {Header} from 'semantic-ui-react';

function DiffBox(props){
  const isHighlighted = props.isHighlighted;
  return(
    <div className={"difficulty-box " + (isHighlighted ? "highlighted" : "regular")}
    onClick = {()=>props.onClick()}>
      <Header as='h4'>{props.name}</Header>
      {props.desc}
    </div>
  );
}

export default DiffBox;