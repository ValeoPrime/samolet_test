import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { Libraries } from "../contexts/Libraries";
import "./oneLibrare.sass";

const OneLibrare = (props) => {
  const { allLibraries } = useContext(Libraries);

  const currentDistrikt = allLibraries.find(
    (elem) => elem.order === +props.match.params.order
  );

  return (
    <div className="card">
      <h2 className="title">{currentDistrikt.fullname}</h2>
      <p>Адресс: {currentDistrikt.address}</p>
      <div className="card__inner_wrap">
        <div className="cardRow">
          Общее число библиотек: <span>{currentDistrikt.libraries}</span>{" "}
        </div>
        <hr />
        <div className="cardRow">
          Общее число компьютеров:<span>{currentDistrikt.computers}</span>{" "}
        </div>
        <hr />
        <div className="cardRow">
          Фонды: <span>{currentDistrikt.funds}руб.</span>{" "}
        </div>
        <hr />
        <div className="cardRow">
          Бюджет: <span>{currentDistrikt.funds_budget} руб.</span>
        </div>
      </div>
      <Link to="/">
        <Button>Вернутся на главную</Button>
      </Link>
    </div>
  );
};

export default OneLibrare;
