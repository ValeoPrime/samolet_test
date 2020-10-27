import React from "react";
import SortAndSearch from "../sortAndSearch/SortAndSearch";

import "./libraryList.sass";
import ListItem from "./listItem/ListItem";

const LibraryList = (props) => {
  return (
    <React.Fragment>
      <h1>Библиотеки. Статистическая информация</h1>
      <SortAndSearch
        sortItems={props.sortItems}
        inputChangeHandler={props.inputChangeHandler}
        searchInputValue={props.searchInputValue}
        filterItems={props.filterItems}
      />
      <ul className="libraryList">
        {props.allLibraries.map((item, i) => {
          return <ListItem key={i} item={item} />;
        })}
      </ul>
    </React.Fragment>
  );
};

export default LibraryList;
