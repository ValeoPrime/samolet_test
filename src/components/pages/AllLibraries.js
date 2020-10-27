import React, { useEffect, useState, useContext } from "react";
import Loader from "../loader/Loader";
import LibraryList from "../libraryList/LibraryList";
import { Libraries } from "../contexts/Libraries";

const AllLibraries = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { allLibraries, setAllLibraries } = useContext(Libraries);
  const [filterLibraries, setFilterLibraries] = useState([]);
  const [current, setСurrent] = useState(true);
  const [searchInputValue, setsearchInputValue] = useState("");

  useEffect(() => {
    setFilterLibraries(allLibraries);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [allLibraries]);

  function inputChangeHandler(value) {
    setsearchInputValue(value);
  }

  function sortItems() {
    const sortArr = [];
    const sortMethods = [
      (a, b) => (a.libraries > b.libraries ? 1 : -1),
      (a, b) => (a.libraries < b.libraries ? 1 : -1),
    ];

    if (current) {
      let dat = allLibraries.slice().sort(sortMethods[0]);
      setСurrent(false);
      setAllLibraries(sortArr.concat(dat));
    } else {
      let dat = allLibraries.slice().sort(sortMethods[1]);
      setСurrent(true);
      setAllLibraries(sortArr.concat(dat));
    }
  }

  function filterItems(event) {
    event.preventDefault();
    const search = new RegExp(searchInputValue);
    const filtered = allLibraries.filter((str) =>
      search.test(str.fullname.toLowerCase())
    );
    setFilterLibraries(filtered);
    setsearchInputValue("");
  }

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <LibraryList
          allLibraries={filterLibraries}
          sortItems={sortItems}
          inputChangeHandler={inputChangeHandler}
          searchInputValue={searchInputValue}
          filterItems={filterItems}
        />
      )}
    </div>
  );
};

export default AllLibraries;
