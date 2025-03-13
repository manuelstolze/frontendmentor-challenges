"use client";

import styles from "./card.module.css";
import React, {useState} from "react";
import {CardFooter} from "@/components/Card.Footer";

interface CardProps {
    image: {
        src: string;
    }
}


const Card: React.FC<CardProps> = (props)=> {
    const [isShareOpen, setIsShareOpen] = useState(false);
    const {image} = props;

    function handleShareClick() {
        setIsShareOpen(!isShareOpen);
    }

    return (
        <div className={styles.card}>
            <img className={styles.cover} src={image.src} alt={"Article"}/>
            <div className={styles.content}>
                <h1>
                    Shift the overall look and feel by adding these wonderful
                    touches to furniture in your home
                </h1>
                <p >
                    Ever been in a room and felt like something was missing? Perhaps
                    it felt slightly bare and uninviting. I’ve got some simple tips
                    to help you make any room feel complete.
                </p>
            </div>
            <div className={styles.footer}>
                <div className={styles.footerContent}>
                    <CardFooter/>
                </div>
            </div>

        </div>
    );
}

export default Card;