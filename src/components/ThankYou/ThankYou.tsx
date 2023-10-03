import React from "react";

import styles from "./ThankYou.module.scss";
import iconThankYou from "../../assets/images/icon-thank-you.svg";

interface ThankYouProps {}

const ThankYou: React.FC<ThankYouProps> = () => {
  return (
    <div className={styles.thankYou}>
      <img className={styles.img} src={iconThankYou}></img>
      <h2 className={styles.title}>Thank you! </h2>
      <p className={styles.text}>
        Thanks for confirming your suscribtion! We hope you have fun using our platform. If you ever need support,
        please feel free to email us at support@loremgaming.com
      </p>
    </div>
  );
};

export { ThankYou };
