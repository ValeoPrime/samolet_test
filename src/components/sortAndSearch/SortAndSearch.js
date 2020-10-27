import React from "react";
import Button from "../button/Button";
import "./sortAndSearch.sass";

const SortAndSearch = (props) => {
  return (
    <div className="sortAndSearch__wrap">
      <button
        className="sort"
        onClick={() => {
          props.sortItems();
        }}
      >
        Сортировать по количеству библиотек
      </button>
      <form
        onSubmit={(event) => {
          props.filterItems(event);
        }}
      >
        <input
          className="form__input"
          type="text"
          onChange={(e) => {
            props.inputChangeHandler(e.target.value);
          }}
          value={props.searchInputValue}
        />
        <Button>Фильтровать по региону</Button>
      </form>
    </div>
  );
};

export default SortAndSearch;
