import React from "react";
import styles from "./card.module.css";

interface CardAuthorProps {
    toggleContent: () => void;
}

export const CardAuthor: React.FC<CardAuthorProps> = ({toggleContent}) => {
  console.log("CardAuthor");
    return (
      <div className={styles.author}>
          <img className={"author-picture"} src={"/images/avatar-michelle.jpg"} alt={"Author"}/>
          <div>
              <h2>Michelle Appleton</h2>
              <p>28 Jun 2020</p>
          </div>
          <div className={styles.actions} onClick={toggleContent}>
              <div className={styles.iconContainer} >
                  <img src={"/images/icon-share.svg"} alt={"Click to open share"} role={"button"}/>
              </div>
          </div>
      </div>

  );
}