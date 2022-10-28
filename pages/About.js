import React from "react";
import styles from "../styles/About.module.css";
import { FaTwitter } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { ImLinkedin } from "react-icons/im";
import { SiGmail } from "react-icons/si";
export default function About(props) {
  return (
    <div className={styles.Main__Container}>
      <div className={styles.about}>
        <div className={styles.heading}>{props.heading}</div>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.contact}>
          For more information these are our links
        </div>

        <div className={styles.icon}>
          {props.twitter !== undefined && (
            <div className={styles.icon__1}>
              <a href={props.twitter}>
                <FaTwitter color="black" />
              </a>
            </div>
          )}
          {props.discord !== undefined && (
            <div className={styles.icon__1}>
              <a href={props.discord}>
                <SiDiscord color="black" />
              </a>
            </div>
          )}

          {props.linkdin !== undefined && (
            <div className={styles.icon__1}>
              <a href={props.linkdin}>
                <ImLinkedin color="black" />
              </a>
            </div>
          )}
          {props.email !== undefined && (
            <div className={styles.icon__1}>
              <a href={props.email}>
                <SiGmail color="black" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
