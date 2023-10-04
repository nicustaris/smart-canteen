import React from "react";

import styles from "./NotFoundBlock.module.scss";

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <span>&#x1F625;</span>
      <br />
      <h1>PAGE NOT FOUND</h1>
    </div>
  );
}

export default NotFoundBlock;
