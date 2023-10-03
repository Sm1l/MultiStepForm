import React from "react";

import styles from "./NavItem.module.scss";
import { useStepStore } from "../../store/store";
import { StepType } from "../../store/store";

interface NavItemProps {
  num: StepType;
  title: string;
}

const NavItem: React.FC<NavItemProps> = ({ num, title }) => {
  const step = useStepStore((state) => state.step);
  // const setStep = useStepStore((state) => state.setStep); //!del

  return (
    <div className={styles.navItem}>
      <div
        className={step !== num ? styles.button : `${styles.button} ${styles.buttonActive}`}
        // onClick={() => setStep(num)} //!del
      >
        {num}
      </div>
      <div className={styles.right}>
        <p className={styles.text}>step {num}</p>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
};

export { NavItem };
