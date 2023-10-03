import React from "react";

import styles from "./MainContainer.module.scss";
import { Navigation } from "../Navigation";
import { useStepStore } from "../../store/store";
import { YourInfo } from "../YourInfo";
import { Title } from "../Title";
import { SelectPlan } from "../SelectPlan";
import { AddOns } from "../AddOns";
import { Finishing } from "../Finishing";

export interface Iform {
  name: string;
  email: string;
  phone: number;
  plan: "arcade" | "advanced" | "pro";
  pilling: "monthly" | "early";
  onlineService: boolean;
  largeStorage: boolean;
  customizableProfile: boolean;
}

interface MainContainerProps {}

const MainContainer: React.FC<MainContainerProps> = () => {
  const step = useStepStore((state) => state.step);

  return (
    <main className={styles.mainContainer}>
      <Navigation />
      {step === 1 && (
        <div className={styles.contentContainer}>
          <Title text="Please provide your name, email address, and phone number." title="Personal info" />
          <YourInfo />
        </div>
      )}
      {step === 2 && (
        <div className={styles.contentContainer}>
          <Title text="You have the option of mounthly or yearly billing." title="Select your plan" />
          <SelectPlan />
        </div>
      )}
      {step === 3 && (
        <div className={styles.contentContainer}>
          <Title title="Pick add-ons" text="Add-ons help enhance your gaming experience." />
          <AddOns />
        </div>
      )}
      {step === 4 && (
        <div className={styles.contentContainer}>
          <Finishing />
        </div>
      )}
    </main>
  );
};

export { MainContainer };
