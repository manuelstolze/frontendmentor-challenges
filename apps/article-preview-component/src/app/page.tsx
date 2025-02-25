import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/Card";

export default function Home() {
  return (
      <div className={styles.page}>
        <main className={styles.main}>
            <Card image={{src: "./images/drawers.jpg"}}/>
        </main>
        {/*<footer className={styles.attribution}>*/}
        {/*  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.*/}
        {/*  Coded by <a href="https://github.com/manuelstolze">Manuel Stolze</a>.*/}
        {/*</footer>*/}
      </div>
  );
}
