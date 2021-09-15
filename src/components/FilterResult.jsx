import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectAllJobs,
  setJobSearchText,
  setSelectedArea,
  setSearchedData,
  getJobs,
  setFilteredData,
} from "../store/jobsSlice";

function FilterResult() {
  const dispatch = useDispatch();
  const jobSearchText = useSelector(({ jobs }) => jobs.jobSearchText);
  const allJobs = useSelector(selectAllJobs);
  const searchedData = useSelector(({ jobs }) => jobs.searchedData);
  const selectedArea = useSelector(({ jobs }) => jobs.selectedArea);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  function getFilteredArray() {
    if (jobSearchText.length === 0 && selectedArea.length === 0) {
      return searchedData;
    }
    return searchedData.filter((item) => {
      return (
        item.job.toLowerCase().includes(jobSearchText.toLowerCase()) &&
        item.area.toLowerCase().includes(selectedArea.toLowerCase())
      );
    });
  }

  return (
    <div className="d-flex flex-column justify-content-center">
      <input
        placeholder="Job Title"
        className="search-input mx-0 my-2"
        value={jobSearchText}
        onChange={(ev) => dispatch(setJobSearchText(ev))}
      />
      <input
        className="search-input mx-0 mb-2"
        value={selectedArea}
        onChange={(ev) => dispatch(setSelectedArea(ev))}
        placeholder="Area-Autocomplete"
        list="area-list"
      />
      <datalist id="area-list">
        {searchedData.map((a) => (
          <option key={a.id}>{a.area}</option>
        ))}
      </datalist>
      <button
        className="filter-button"
        onClick={() => dispatch(setFilteredData(getFilteredArray()))}
      >
        Filter
      </button>
    </div>
  );
}

export default FilterResult;
