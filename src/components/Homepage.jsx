import React from "react";
import JobList from "./JobList";
import SearchJobs from "./SearchJobs";
import { useSelector } from "react-redux";

function Homepage() {
  const searchText = useSelector(({ jobs }) => jobs.searchText);
  return (
    <div className="container d-flex">
      <div
        className={`col-3 justify-content-center filter-wrapper ${
          searchText.length > 0 ? "d-flex" : "d-none"
        }`}
      >
        a
      </div>
      <div
        className={`d-flex flex-column justify-content-center align-items-center search-list-wrapper ${
          searchText.length > 0 ? "col-9" : "col-12"
        }`}
      >
        <div className="col-2 search-input-wrapper">
          <SearchJobs />
        </div>
        <div className="col-10 list-wrapper">
          <JobList />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
