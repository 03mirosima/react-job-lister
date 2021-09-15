import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectAllJobs,
  setNameSearchText,
  setSelectedCompany,
  setSearchedData,
  getJobs,
} from "../store/jobsSlice";

function SearchJobs() {
  const dispatch = useDispatch();
  const nameSearchText = useSelector(({ jobs }) => jobs.nameSearchText);
  const allJobs = useSelector(selectAllJobs);
  const selectedCompany = useSelector(({ jobs }) => jobs.selectedCompany);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  function getFilteredArray() {
    if (nameSearchText.length === 0 && selectedCompany.length === 0) {
      return allJobs;
    }
    return allJobs.filter((item) => {
      if (selectedCompany.length > 0 || item.company !== selectedCompany) {
      }
      return item.name.toLowerCase().includes(nameSearchText.toLowerCase());
    });
  }

  return (
    <>
      <input
        placeholder="Name"
        className="search-input"
        value={nameSearchText}
        onChange={(ev) => dispatch(setNameSearchText(ev))}
      />
      <input
        value={selectedCompany}
        onChange={(ev) => dispatch(setSelectedCompany(ev))}
        placeholder="Company-Autocomplete"
        list="europe-countries"
      />
      <datalist id="europe-countries">
        {allJobs.map((a) => (
          <option key={a.id}>{a.company}</option>
        ))}
      </datalist>
      <button onClick={() => dispatch(setSearchedData(getFilteredArray()))}>
        Search
      </button>
    </>
  );
}

export default SearchJobs;
