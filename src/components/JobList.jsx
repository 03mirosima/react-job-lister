import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getJobs, selectAllJobs } from "../store/jobsSlice";

function JobList() {
  const dispatch = useDispatch();
  const allJobs = useSelector(selectAllJobs);
  const searchText = useSelector(({ jobs }) => jobs.searchText);
  const [filteredData, setFilteredData] = useState(null);
  console.log(allJobs);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  useEffect(() => {
    function getFilteredArray() {
      if (searchText.length === 0) {
        return allJobs;
      }
      return allJobs.filter((item) => {
        return item.name.toLowerCase().includes(searchText.toLowerCase());
      });
    }

    if (allJobs) {
      setFilteredData(getFilteredArray());
    }
  }, [allJobs, searchText]);
  return (
    <div>
      {filteredData &&
        (filteredData.length > 0 ? (
          filteredData.map((a) => (
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
          <div className="">
            <h1>Not Found</h1>
          </div>
        ))}
    </div>
  );
}

export default JobList;
