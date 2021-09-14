import React from "react";
import JobList from "./JobList";

function Homepage() {
  return (
    <div className="container-fluid d-flex">
      <div className="col-3">a</div>
      <div className="col-9 flex flex-row">
        <div className="col-2">b</div>
        <div className="col-10">
          <JobList />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
