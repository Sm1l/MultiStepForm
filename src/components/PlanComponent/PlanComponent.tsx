import React, { useEffect } from "react";

import styles from "./PlanComponent.module.scss";
import { TPlanType, useStepStoreTwo, IStepStoreTwoStates } from "../../store/store";
import { UseFormReturn } from "react-hook-form";

interface PlanComponentProps {
  itemPlan: TPlanType;
  moPrice: number;
  yrPrice: number;
  icon: string;
  formSettings: UseFormReturn<IStepStoreTwoStates, undefined>;
}

const PlanComponent: React.FC<PlanComponentProps> = ({ itemPlan, moPrice, yrPrice, icon, formSettings }) => {
  const plan = useStepStoreTwo((state) => state.plan);
  const setPlan = useStepStoreTwo((state) => state.setPlan);
  const billing = useStepStoreTwo((state) => state.billing);

  const { register, watch } = formSettings;
  const watchPlan = watch("plan");
  // console.log(plan);

  useEffect(() => {
    setPlan(watchPlan);
  }, [watchPlan]);

  return (
    <label
      htmlFor={itemPlan}
      className={
        itemPlan === plan ? `${styles.planComponent} ${styles.planComponentActive}` : `${styles.planComponent}`
      }
    >
      <div className={styles.imgContainer}>
        <img src={icon} alt="icon"></img>
      </div>
      <div className={styles.group}>
        <h2 className={styles.plan}>{itemPlan}</h2>
        <span className={styles.price}>{`$${billing === "monthly" ? moPrice : yrPrice}/${
          billing === "monthly" ? "mo" : "yr"
        }`}</span>
        {billing === "yearly" && <span className={styles.free}>2 months free</span>}
      </div>
      <input
        className={styles.inputRadio}
        type="radio"
        {...register("plan", { required: "required" })}
        value={itemPlan}
        id={itemPlan}
        checked={itemPlan === plan}
      ></input>
    </label>
  );
};

export { PlanComponent };
