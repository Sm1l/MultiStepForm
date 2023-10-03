import React from "react";

import styles from "./AddOnItem.module.scss";
import { useStepStoreTwo } from "../../store/store";

interface AddOnItemProps {
  text: string;
  price: number | null;
}

const AddOnItem: React.FC<AddOnItemProps> = ({ text, price }) => {
  const billing = useStepStoreTwo((state) => state.billing);
  // console.log(price);

  return (
    <div className={styles.addOnItem}>
      <p className={styles.addOnText}>{text}</p>
      <span className={styles.addOnPrice}>
        +{price}$/{billing === "monthly" ? "mo" : "yr"}
      </span>
    </div>
  );
};

export { AddOnItem };
