import React from "react";
import styles from "../styles/About__us.module.css";

export default function About__us(props) {
  return (
    <div className={styles.main__container}>
      <div className={styles.container__1}>
        <div
          className={styles.container__2}
          style={{
            backgroundImage: `url(${props.image})`,
          }}
        ></div>
      </div>
    </div>
  );
}
