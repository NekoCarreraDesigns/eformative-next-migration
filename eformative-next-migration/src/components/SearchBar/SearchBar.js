import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
      try {
        const response = await fetch(`/market/search`)
        if (response.ok) {
          console.log("clicked")
          console.log(response)
          const searchResults = await response.json()
          onSearch(searchResults)
        } else if (searchTerm.trim() !== "") {
          onSearch(searchTerm.toLowerCase())
        } else {
          alert("please add a value to the search bar")
          console.error("error fetching results", response.status)
        }
      } catch (err) {
        console.error("error during search",)
      }
  };

  const handleClear = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <div className='market-filter-input-div'>
      <input
        className='market-filter-input'
        type='text'
        placeholder='What are you looking for?'
        id='search-bar'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="search-input"
      />
      <div className='market-button-container'>
        <button className='search-button clear-btn-sm' onClick={handleSearch}>
          Search
        </button>
        <button className='clear-button clear-btn-sm' onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
