import React from "react";
import styles from "../styles/Introduction.module.css";

export default function Introduction(props) {
  const getwhitelisted = () => {
    console.log("whitelisting page");
  };

  return (
    <div className={styles.main__container}>
      <div className={styles.container1}>
        <div className={styles.heading}>
          <h1>{props.heading}</h1>
        </div>
        <div className={styles.intro}>
          <p>{props.intro}</p>
          <div>
            <button className={styles.button} onClick={getwhitelisted}>
              Get Whitelisted
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.container2}
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      ></div>
    </div>
  );
}
