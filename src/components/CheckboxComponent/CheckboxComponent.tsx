import React, { useState, useEffect } from "react";

import styles from "./CheckboxComponent.module.scss";
import { TOnlineServiceType, TLargerStorageType, TCustomizableProfileType, useStepStoreTwo } from "../../store/store";
import { IStepThreeData } from "../AddOns";
import { UseFormReturn } from "react-hook-form";

type TAddOnType = TOnlineServiceType | TLargerStorageType | TCustomizableProfileType;

interface CheckboxComponentProps {
  title: string;
  text: string;
  type: "onlineService" | "largerStorage" | "customizableProfile";
  checked: boolean;
  setChecked: (checked: boolean) => void;
  formSettings: UseFormReturn<IStepThreeData, undefined>;
}

const CheckboxComponent: React.FC<CheckboxComponentProps> = ({
  title,
  text,
  type,
  checked,
  setChecked,
  formSettings,
}) => {
  const billing = useStepStoreTwo((state) => state.billing);
  const [price, setPrice] = useState<TAddOnType>();

  const { register, watch } = formSettings;

  const watchType = watch(`${type}`);
  // console.log("watchtype:", type, watchType);

  const countPrice = (setFunc: (price: TAddOnType) => void) => {
    switch (billing) {
      case "monthly":
        switch (type) {
          case "onlineService":
            setFunc(1);
            break;
          case "largerStorage":
            setFunc(2);
            break;
          case "customizableProfile":
            setFunc(2);
            break;
        }
        break;
      case "yearly":
        switch (type) {
          case "onlineService":
            setFunc(10);
            break;
          case "largerStorage":
            setFunc(20);
            break;
          case "customizableProfile":
            setFunc(20);
            break;
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    countPrice(setPrice);
  }, []);

  useEffect(() => {
    setChecked(Boolean(watchType));
  }, [watchType]);
  // console.log(type, checked);

  return (
    <label
      className={
        checked ? `${styles.checkboxComponent} ${styles.checkboxComponentActive}` : `${styles.checkboxComponent}`
      }
    >
      <div className={styles.flexContainer}>
        <div className={styles.checkboxContainer}>
          <input className={styles.checkbox} type="checkbox" checked={checked} {...register(`${type}`)}></input>
          <div className={styles.customCheckbox}></div>
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.text}>{text}</span>
        </div>
      </div>
      <div className={styles.priceContainer}>
        <p>
          +${price}/{billing === "monthly" ? "mo" : "yr"}
        </p>
      </div>
    </label>
  );
};

export { CheckboxComponent };
