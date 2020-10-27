import React from "react";
import "./listItem.sass";
import Button from "../../button/Button";
import { Link } from "react-router-dom";

const ListItem = (props) => {
  return (
    <li className="listItem">
      <span>{props.item.fullname}</span>
      <div>
        Общее число библиотек{" "}
        <span className="libCount">{props.item.libraries}</span>{" "}
      </div>

      <Link to={`/librare/${props.item.order}`}>
        <Button>Узнать больше </Button>
      </Link>
    </li>
  );
};

export default ListItem;
