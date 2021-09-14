import React from "react";
import JobList from "./JobList";
import SearchJobs from "./SearchJobs";

function Homepage() {
  return (
    <div className="container d-flex">
      <div className="col-3 d-flex justify-content-center">a</div>
      <div className="col-9 d-flex flex-column justify-content-center align-items-center">
        <div className="col-2 search-wrapper">
          <SearchJobs />
        </div>
        <div className="col-10 d-flex justify-content-center list-wrapper">
          <JobList />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
