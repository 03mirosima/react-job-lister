import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobSearchText } from "../store/jobsSlice";

function SearchJobs() {
  const dispatch = useDispatch();
  const searchText = useSelector(({ jobs }) => jobs.searchText);

  return (
    <>
      <input
        placeholder="Name"
        className="search-input"
        value={searchText}
        onChange={(ev) => dispatch(setJobSearchText(ev))}
      />
    </>
  );
}

export default SearchJobs;
