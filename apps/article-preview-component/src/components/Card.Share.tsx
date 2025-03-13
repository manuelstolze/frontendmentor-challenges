import styles from "@/components/card.module.css";
import React from "react";

interface CardShareProps {
    toggleContent: () => void;

}

export const CardShare: React.FC<CardShareProps> = ({toggleContent}) => {
    return (
        <div className={styles.share}>
            <div style={{display: "flex", justifyContent: "space-around", gap: "1rem"}}>
                SHARE
                <img  src={"/images/icon-facebook.svg"} alt={"Facebook"}/>
                <img  src={"/images/icon-twitter.svg"} alt={"Twitter"}/>
                <img  src={"/images/icon-pinterest.svg"} alt={"Pinterest"}/>
            </div>
            <div className={styles.actions}>
                <div className={styles.iconContainer} onClick={toggleContent}>
                    <img src={"/images/icon-share.svg"} alt={"Click to open share"} role={"button"}/>
                </div>
            </div>
        </div>
)
}