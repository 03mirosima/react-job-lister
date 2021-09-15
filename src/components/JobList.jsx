import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getJobs, selectAllJobs } from "../store/jobsSlice";

function JobList() {
  const dispatch = useDispatch();

  const nameSearchText = useSelector(({ jobs }) => jobs.nameSearchText);
  const selectedCompany = useSelector(({ jobs }) => jobs.selectedCompany);
  const searchedData = useSelector(({ jobs }) => jobs.searchedData);
  console.log(searchedData, "aa");

  return (
    <div className="d-flex flex-column justify-content-center">
      {searchedData.length > 0 ? (
        searchedData.map((a) => (
          <div key={a.id} className="card-wrapper d-flex flex-col">
            <div className="card-image">
              <img src={a.image} />
            </div>
            <div className="card-info d-flex flex-column">
              <h5>{a.name}</h5>
              <h6>{a.company}</h6>
              <h6>{a.job}</h6>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">
          <h3>Can't find it!</h3>
        </div>
      )}
    </div>
  );
}

export default JobList;
