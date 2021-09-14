import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllJobs,
  setJobSearchText,
  setSelectedCompany,
} from "../store/jobsSlice";

function SearchJobs() {
  const dispatch = useDispatch();
  const searchText = useSelector(({ jobs }) => jobs.searchText);
  const selectedCompany = useSelector(({ jobs }) => jobs.selectedCompany);
  const companies = useSelector(selectAllJobs);
  function handleSearching() {
    dispatch(setJobSearchText());
    dispatch(setSelectedCompany());
  }
  return (
    <>
      <input
        placeholder="Name"
        className="search-input"
        value={searchText}
        onChange={(ev) => dispatch(setJobSearchText(ev))}
      />
      <input
        value={selectedCompany}
        onChange={(ev) => dispatch(setSelectedCompany(ev))}
        list="europe-countries"
        placeholder="Company-Autocomplete"
      />
      <datalist id="europe-countries">
        {companies.map((a) => (
          <option key={a.id}>{a.company}</option>
        ))}
      </datalist>
    </>
  );
}

export default SearchJobs;
