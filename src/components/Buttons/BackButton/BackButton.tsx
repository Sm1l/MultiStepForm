import React from "react";

import styles from "./BackButton.module.scss";
import { useStepStore } from "../../../store/store";

interface BackButtonProps {}

const BackButton: React.FC<BackButtonProps> = () => {
  const decreaseStep = useStepStore((state) => state.decreaseStep);
  return (
    <button className={styles.backButton} onClick={decreaseStep} type="button">
      go back
    </button>
  );
};

export { BackButton };
