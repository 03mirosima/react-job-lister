import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getJobs, selectAllJobs } from "../store/jobsSlice";

function JobList() {
  const dispatch = useDispatch();
  const allJobs = useSelector(selectAllJobs);
  const searchText = useSelector(({ jobs }) => jobs.searchText);
  const selectedCompany = useSelector(({ jobs }) => jobs.selectedCompany);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  useEffect(() => {
    function getFilteredArray() {
      if (searchText.length === 0 && selectedCompany.length === 0) {
        return allJobs;
      }
      return allJobs.filter((item) => {
        if (selectedCompany.length > 0 && item.company !== selectedCompany) {
          return console.log(item, "item");
        }
        return item.name.toLowerCase().includes(searchText.toLowerCase());
      });
    }
    console.log(filteredData);
    if (allJobs) {
      setFilteredData(getFilteredArray());
    }
  }, [allJobs, searchText, selectedCompany]);
  return (
    <div className="d-flex flex-column justify-content-center">
      {searchText &&
        (searchText.length > 0 || selectedCompany.length > 0 ? (
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
          <div className="text-center">
            <h3>Can't find a person with that name!</h3>
          </div>
        ))}
    </div>
  );
}

export default JobList;
