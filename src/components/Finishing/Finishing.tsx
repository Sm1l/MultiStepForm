import React, { useState } from "react";

import styles from "./Finishing.module.scss";
import { BackButton } from "../Buttons/BackButton";
import { useStepStoreTwo, useStepStore, useStepStoreThree, useStepStoreOne } from "../../store/store";
import { AddOnItem } from "../AddOnItem";
import { ThankYou } from "../ThankYou";
import { Title } from "../Title";

interface FinishingProps {}

const Finishing: React.FC<FinishingProps> = () => {
  const name = useStepStoreOne((state) => state.name);
  const email = useStepStoreOne((state) => state.email);
  const phone = useStepStoreOne((state) => state.phone);
  const billing = useStepStoreTwo((state) => state.billing);
  const plan = useStepStoreTwo((state) => state.plan);
  const planCost = useStepStoreTwo((state) => state.planCost);
  const setStep = useStepStore((state) => state.setStep);
  const onlineService = useStepStoreThree((state) => state.onlineService);
  const largerStorage = useStepStoreThree((state) => state.largerStorage);
  const customizableProfile = useStepStoreThree((state) => state.customizableProfile);

  const [thankYouisVisible, setThankYouisVisible] = useState<boolean>(false);

  const changePlanHandleClick = () => {
    setStep(2);
  };
  const confirmHandleClick = () => {
    setThankYouisVisible(true);
    console.log("name:", name, ",", "email:", email, ",", "phone:", phone, ",", "totalPrice:", totalPrice);
  };

  const totalPrice: number =
    (planCost ? planCost : 0) +
    (onlineService ? onlineService : 0) +
    (largerStorage ? largerStorage : 0) +
    (customizableProfile ? customizableProfile : 0);

  return (
    <>
      {!thankYouisVisible && (
        <>
          <Title title="Finishing up" text="Double-check everything looks OK before confirming." />
          <div className={styles.finishing}>
            <div className={styles.finishContainer}>
              <div className={styles.partContainer}>
                <div className={styles.planContainer}>
                  <div className={styles.planTop}>
                    <p className={styles.planText}>
                      {plan} ({billing})
                    </p>
                    <button className={styles.planButton} onClick={changePlanHandleClick} type="button">
                      Change
                    </button>
                  </div>
                  <span className={styles.planPrice}>
                    +{planCost}$/{billing === "monthly" ? "mo" : "yr"}
                  </span>
                </div>
                {(onlineService || largerStorage || customizableProfile) && (
                  <div className={styles.addOnsContainer}>
                    {onlineService && <AddOnItem text="online service" price={onlineService} />}
                    {largerStorage && <AddOnItem text="larger storage" price={largerStorage} />}
                    {customizableProfile && <AddOnItem text="customizable profile" price={customizableProfile} />}
                  </div>
                )}
              </div>
              <div className={styles.totalContainer}>
                <p className={styles.totalText}>Total per month</p>
                <span className={styles.totalPrice}>
                  +{totalPrice}
                  $/
                  {billing === "monthly" ? "mo" : "yr"}
                </span>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <BackButton />
              <button className={styles.nextButton} type="button" onClick={confirmHandleClick}>
                confirm
              </button>
            </div>
          </div>
        </>
      )}
      {thankYouisVisible && (
        <>
          <div></div>
          <ThankYou />
        </>
      )}
    </>
  );
};

export { Finishing };
