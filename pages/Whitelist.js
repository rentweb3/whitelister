import React from "react";
import style from "../styles/Whitelist.module.css";

export default function Whitelist(props) {
  return (
    <div className={style.main__container}>
      <div className={style.container__1}>
        <div className={style.description}>
          <h1>{props.heading}</h1>
          <br />
          <p>{props.text}</p>
        </div>
      </div>
      <div className={style.container__2}>
        <div className={style.background__image}></div>
        <div className={style.info}>
          <br />
          <h2>NFTsale-Display Collection Pass</h2>
          <br />
          <p>
            By becoming whitelisted, you can select presale for your collection.
          </p>
          <br />
          <p>Whitelisting price : 0.014ETH</p>
          <br />
          <p>Total UI:9/10</p>
        </div>
        <div className={style.button__box}>
          <button className={style.button}>Get Whitelist</button>
        </div>
      </div>
    </div>
  );
}
