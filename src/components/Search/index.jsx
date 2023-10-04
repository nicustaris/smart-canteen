import React, { useContext } from "react";
import { SearchContext } from "../../App";

import styles from "./Search.module.scss";

const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  return (
    <div className={styles.container}>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Search..."
      />
      <svg
        className={styles.icon}
        height="512px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 512 512"
        width="512px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M448.3,424.7L335,311.3c20.8-26,33.3-59.1,33.3-95.1c0-84.1-68.1-152.2-152-152.2c-84,0-152,68.2-152,152.2  s68.1,152.2,152,152.2c36.2,0,69.4-12.7,95.5-33.8L425,448L448.3,424.7z M120.1,312.6c-25.7-25.7-39.8-59.9-39.8-96.3  s14.2-70.6,39.8-96.3S180,80,216.3,80c36.3,0,70.5,14.2,96.2,39.9s39.8,59.9,39.8,96.3s-14.2,70.6-39.8,96.3  c-25.7,25.7-59.9,39.9-96.2,39.9C180,352.5,145.8,338.3,120.1,312.6z" />
      </svg>
      {searchValue && (
        <svg
          onClick={() => setSearchValue("")}
          className={styles.clearIcon}
          id="Outlined"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Fill">
            <polygon points="28.71 4.71 27.29 3.29 16 14.59 4.71 3.29 3.29 4.71 14.59 16 3.29 27.29 4.71 28.71 16 17.41 27.29 28.71 28.71 27.29 17.41 16 28.71 4.71" />
          </g>
        </svg>
      )}
    </div>
  );
};

export default Search;
