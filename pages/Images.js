import React from "react";
import styles from "../styles/image.module.css";
export default function Image() {
  const ape_images = [
    "https://img.seadn.io/files/7f3ac60b8433746081e395bd5158fe4c.png?fit=max&w=1000",
    "https://img.seadn.io/files/ac7856326ee1a80bf0cd9bfb67876c04.png?fit=max&w=1000",
    "https://img.seadn.io/files/30b75129421c0eceda8830dd0997c104.png?fit=max&w=1000",
    "https://img.seadn.io/files/e865af9ef0b02bbe156eb500d0ecf808.png?fit=max&w=1000",
    "https://img.seadn.io/files/49568154234fa90b18a9d1fbc830d3f9.png?auto=format&fit=max&w=512",
    "https://img.seadn.io/files/45b6d76aff0aa5f3808bdad565891cd2.png?fit=max&w=1000",
    "https://img.seadn.io/files/d74f4051dc64522c78fd1365c6259cbd.png?fit=max&w=1000",
    "https://img.seadn.io/files/7e02a5b28b7a2d44b1c24cfb942737d3.png?fit=max&w=2000",
    "https://img.seadn.io/files/45a70ee7875d07b9fde3953dc9e33ee0.png?fit=max&w=1000",
    "https://img.seadn.io/files/9aea46e6387940e72eb47336b6b576c5.png?fit=max&w=1000",
    "https://img.seadn.io/files/9832930b3a1ab75a2e6270ebad9baeff.png?fit=max&w=1000",
    "https://img.seadn.io/files/897a84e94931b49ec4444941c18f3e7f.png?fit=max&w=1000",
  ];

  const ape_token_id = [
    "9149",
    "1268",
    "8668",
    "1286",
    "4977",
    "4647",
    "8547",
    "1932",
    "7585",
    "4022",
    "2040",
    "2003",
  ];
  // const id="token";
  return (
    <>
      <div className={styles.main}>
        <ul key={"ape_collection"} className={styles.collection_list}>
          {ape_images.map((item, index) => {
            return (
              <li key={"ape" + index} className={styles.image__container}>
                <img
                  className={styles.image}
                  src={item}
                  onClick={() => {
                    console.log(`ape ${index} in cliked`);
                  }}
                />
              </li>
            );
          })}
        </ul>

        {/* {array_Of_Images.map((item) => {
          // <div>

          return (
            <ul>
              <li className={styles.image__container}>
                <img src={item} />
              </li>
            </ul>
          );

          // </div>;
        })} */}
      </div>
    </>
  );
}
