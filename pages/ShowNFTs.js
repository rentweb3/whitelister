import React, { useState } from "react";
import styles from "../styles/ShowNFTs.module.css";
import NFTInformation from "./NFTInformation";
export default function ShowNFTs(props) {
  let collection = props.NFTs;
  let contractAddress = props.contractAddress;
  let whitelistStartTime = props.startTime;
  let whitelistEndTime = props.endTime;
  let isWhitelisted = props.isWhitelisted;
  let currentTime = new Date().getTime();
  let whitelistStatusMessage = isWhitelisted
    ? "You are Already Whitelisted"
    : currentTime < whitelistStartTime
    ? "Whitelisting is not started yet"
    : currentTime >= whitelistStartTime && currentTime < whitelistEndTime
    ? "Whitelisting is going on"
    : "Whitelisting has ended !";
  console.log(whitelistStatusMessage);
  let whitelistStatus =
    currentTime < whitelistStartTime
      ? false
      : currentTime >= whitelistStartTime && currentTime < whitelistEndTime
      ? true
      : false;

  const [selectedNFT, setSelectedNFT] = useState(null);

  // console.log("NFt collection we found is ", collection);

  return (
    <>
      {!selectedNFT && (
        <div className={styles.main}>
          <h4 className={styles.status}>{whitelistStatusMessage}</h4>
          <ul key={"ape_collection"} className={styles.collection_list}>
            {collection.map((item, index) => {
              return (
                <li key={"ape" + index} className={styles.nft__container}>
                  <div className={styles.image__container}>
                    <img
                      className={styles.image}
                      src={item.image}
                      onClick={() => {
                        setSelectedNFT(item);
                      }}
                    />
                  </div>
                  <h4>{item.name}</h4>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {selectedNFT && (
        <NFTInformation
          isWhitelisted={isWhitelisted}
          startTime={whitelistStartTime}
          endTime={whitelistEndTime}
          whitelistStatus={whitelistStatus}
          contractAddress={contractAddress}
          NFT={selectedNFT}
          toggler={setSelectedNFT}
        />
      )}
    </>
  );
}
