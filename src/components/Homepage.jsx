import React from "react";
import JobList from "./JobList";
import SearchJobs from "./SearchJobs";
import FilterResult from "./FilterResult";
import { useSelector } from "react-redux";

function Homepage() {
  const nameSearchText = useSelector(({ jobs }) => jobs.nameSearchText);
  return (
    <div className=" d-flex app-wrapper">
      <div
        className={`justify-content-center filter-wrapper ${
          nameSearchText.length > 0 ? "d-flex" : "d-none"
        }`}
      >
        <FilterResult />
      </div>
      <div
        className={`d-flex flex-column justify-content-center align-items-center search-list-wrapper`}
      >
        <div className=" search-input-wrapper">
          <SearchJobs />
        </div>
        <div className=" list-wrapper">
          <JobList />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
