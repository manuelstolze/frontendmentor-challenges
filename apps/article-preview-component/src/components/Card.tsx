import styles from "./card.module.css";
import React from "react";
import {CardAuthor} from "@/components/Card.Author";

interface CardProps {
    image: {
        src: string;
    }
}


const Card: React.FC<CardProps> = (props)=> {
    const {image} = props;

    return (
        <div className={styles.card}>
            <img className={styles.cover} src={image.src} alt={"Article"}/>
            <div className={styles.content}>
                <h1>
                    Shift the overall look and feel by adding these wonderful
                    touches to furniture in your home
                </h1>
                <p>
                    Ever been in a room and felt like something was missing? Perhaps
                    it felt slightly bare and uninviting. I’ve got some simple tips
                    to help you make any room feel complete.
                </p>

               <CardAuthor/>
            </div>
        </div>
    );
}

export default Card;