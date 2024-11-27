import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-hot-toast";
import styles from "./SearchBar.module.css";

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => setQuery(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={styles.searchBar}>
      <form className={styles.searchForm} onSubmit={handleFormSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search images and photos"
          autoFocus
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
