import React, { useState, useEffect } from "react";
import Switch from "react-switch";
// import { UseFormReturn } from "react-hook-form";
// import { IStepStoreTwoStates } from "../../store/store";

import styles from "./ToggleComponent.module.scss";
import { useStepStoreTwo } from "../../store/store";

interface ToggleComponentProps {
  // formSettings: UseFormReturn<IStepStoreTwoStates, undefined>;
}

const ToggleComponent: React.FC<ToggleComponentProps> = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const billing = useStepStoreTwo((state) => state.billing);
  const setBilling = useStepStoreTwo((state) => state.setBilling);

  // const { register } = formSettings;

  const handleChange = () => {
    if (billing === "monthly") {
      setBilling("yearly");
    } else {
      setBilling("monthly");
    }
  };

  useEffect(() => {
    if (billing === "monthly") {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }, [billing]);

  return (
    <div className={styles.toggleComponent}>
      <span
        className={billing === "yearly" ? `${styles.span} ${styles.spanUnchecked}` : `${styles.span}`}
        onClick={() => {
          setBilling("monthly");
        }}
      >
        Monthly
      </span>
      <label className={styles.label}>
        <Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch"
          onColor="#473dff"
          offColor="#d97a9f"
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          // {...register("billing")}
        />
      </label>
      <span
        className={billing === "monthly" ? `${styles.span} ${styles.spanUnchecked}` : `${styles.span}`}
        onClick={() => {
          setBilling("yearly");
        }}
      >
        Yearly
      </span>
    </div>
  );
};

export { ToggleComponent };
