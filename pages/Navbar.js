import React from "react";
import navstyle from "../styles/Navbar.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar(props) {
  const homepage = () => {
    console.log("call home page");
    props.func("home");
  };
  const whitelist = () => {
    console.log("call whitelisting page");
    props.func("whitelist");
  };
  const about = () => {
    console.log("call about page");
    props.func("about");
  };
  return (
    <>
      <div className={navstyle.maincontainer}>
        <div className={navstyle.container1}>
          <img src={props.image} alt="icon" className={navstyle.image} />
          <p>{props.companyname}</p>
        </div>
        <div className={navstyle.container2}>
          <button className={navstyle.button} onClick={homepage}>
            Home
          </button>
          <button className={navstyle.button} onClick={whitelist}>
            Whitelisting
          </button>
          <button className={navstyle.button} onClick={about}>
            About
          </button>
        </div>
        <div className={navstyle.container3}>
          <ConnectButton />
        </div>
      </div>
    </>
  );
}
Navbar.proptype;
