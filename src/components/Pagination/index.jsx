import styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

import React from "react";

const Pagination = ({ setCurrentPage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => setCurrentPage(event.selected + 1)}
      pageRangeDisplayed={5}
      pageCount={3}
      previousLabel="<"
    />
  );
};

export default Pagination;
