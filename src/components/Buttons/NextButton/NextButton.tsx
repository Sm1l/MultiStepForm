import React from "react";

import styles from "./NextButton.module.scss";
import { useStepStore } from "../../../store/store";

interface NextButtonProps {
  type: "button" | "submit";
  handleClick?: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ type, handleClick }) => {
  const increaseStep = useStepStore((state) => state.increaseStep);
  const handleNextBtnClick = () => {
    if (handleClick) {
      handleClick();
    } else {
      increaseStep();
    }
  };

  return (
    <button className={styles.nextButton} onClick={handleNextBtnClick} type={type}>
      next step
    </button>
  );
};

export { NextButton };
