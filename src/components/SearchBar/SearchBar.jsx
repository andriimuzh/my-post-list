import React from "react";
import T from "prop-types";
import "./searchBar.css";

export default function SearchBar({
  searchPosts,
  addSearchQuery,
  searchQuery,
}) {
  return (
    <header>
      <input
        type="text"
        className="searchInput"
        onChange={addSearchQuery}
        value={searchQuery}
      />
      <button className="searchBtn" onClick={searchPosts}>
        Search
      </button>
    </header>
  );
}

SearchBar.propTypes = {
  searchPosts: T.func,
  addSearchQuery: T.func,
  searchQuery: T.string,
};
