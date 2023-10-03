import React from "react";

import styles from "./Title.module.scss";

interface TitleProps {
  title: string;
  text: string;
}

const Title: React.FC<TitleProps> = ({ title, text }) => {
  return (
    <div className={styles.title}>
      <h1 className={styles.h}>{title}</h1>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export { Title };
