import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card" onClick={props.onClick}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        {props.name}
      </div>

    </div>
  );
}

export default FriendCard;
