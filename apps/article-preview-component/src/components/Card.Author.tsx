import React from "react";
import styles from "./card.module.css";

export const CardAuthor: React.FC = () => {
  return (
      <div className={styles.author}>
          <img className={"author-picture"} src={"#"} alt={"Author"}/>
          <div>
              <p>Michelle Appleton</p>
              <p>28 Jun 2020</p>
          </div>

          <div className={styles.actions}>
              Share
          </div>
      </div>

  );
}