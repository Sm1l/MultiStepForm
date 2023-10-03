import React from "react";

import styles from "./SelectPlan.module.scss";
import { BackButton } from "../Buttons/BackButton";
import { useForm } from "react-hook-form";
import { IStepStoreTwoStates, useStepStore, useStepStoreTwo } from "../../store/store";
import { PlanComponent } from "../PlanComponent";
import iconArcade from "../../assets/images/icon-arcade.svg";
import iconAdvanced from "../../assets/images/icon-advanced.svg";
import iconPro from "../../assets/images/icon-pro.svg";
import { ToggleComponent } from "../ToggleComponent";

interface SelectPlanProps {}

const SelectPlan: React.FC<SelectPlanProps> = () => {
  const plan = useStepStoreTwo((state) => state.plan);
  const billing = useStepStoreTwo((state) => state.billing);
  const increaseStep = useStepStore((state) => state.increaseStep);
  const setPlanCost = useStepStoreTwo((state) => state.setPlanCost);

  const formSettings = useForm<IStepStoreTwoStates>({ mode: "onBlur" });
  const { handleSubmit } = formSettings;

  const onSubmitFormTwo = handleSubmit(() => {
    // console.log("step 2:", data);
    switch (billing) {
      case "monthly":
        if (plan === "arcade") {
          setPlanCost(9);
        } else if (plan === "advanced") {
          setPlanCost(12);
        } else if (plan === "pro") {
          setPlanCost(15);
        }
        break;
      case "yearly":
        if (plan === "arcade") {
          setPlanCost(90);
        } else if (plan === "advanced") {
          setPlanCost(120);
        } else if (plan === "pro") {
          setPlanCost(150);
        }
        break;
    }

    increaseStep();
  });

  return (
    <div className={styles.selectPlan}>
      <form className={styles.planForm} onSubmit={onSubmitFormTwo}>
        <div className={styles.formContainer}>
          <div className={styles.planContainer}>
            <PlanComponent itemPlan="arcade" moPrice={9} yrPrice={90} icon={iconArcade} formSettings={formSettings} />
            <PlanComponent
              itemPlan="advanced"
              moPrice={12}
              yrPrice={120}
              icon={iconAdvanced}
              formSettings={formSettings}
            />
            <PlanComponent itemPlan="pro" moPrice={15} yrPrice={150} icon={iconPro} formSettings={formSettings} />
          </div>
          <div className={styles.toggleContainer}>
            <ToggleComponent />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <BackButton />
          <button className={styles.nextButton} type="submit">
            next step
          </button>
        </div>
      </form>
    </div>
  );
};

export { SelectPlan };
