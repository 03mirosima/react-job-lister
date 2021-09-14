import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getJobs } from "../store/jobsSlice";

function JobList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);
  return (
    <div>
      <div className="card-wrapper d-flex d-col">
        <div className="card-image">image</div>
        <div className="card-info">info</div>
      </div>
    </div>
  );
}

export default JobList;
