import React from "react";
import { BackButton } from "../Buttons/BackButton";

import styles from "./AddOns.module.scss";
import { CheckboxComponent } from "../CheckboxComponent";
import { useStepStore, useStepStoreThree, useStepStoreTwo } from "../../store/store";
import { useForm } from "react-hook-form";
import { IStepStoreThreeStates } from "../../store/store";

interface AddOnsProps {}
export interface IStepThreeData
  extends Pick<IStepStoreThreeStates, "onlineService" | "largerStorage" | "customizableProfile"> {}

const AddOns: React.FC<AddOnsProps> = () => {
  const formSettings = useForm<IStepThreeData>({ mode: "onBlur" });
  const { handleSubmit } = formSettings;

  const increaseStep = useStepStore((state) => state.increaseStep);

  // const onlineService = useStepStoreThree((state) => state.onlineService);
  // const largerStorage = useStepStoreThree((state) => state.largerStorage);
  // const customizableProfile = useStepStoreThree((state) => state.customizableProfile);
  const setOnlineService = useStepStoreThree((state) => state.setOnlineService);
  const setLargerStorage = useStepStoreThree((state) => state.setLargerStorage);
  const setCustomizableProfile = useStepStoreThree((state) => state.setCustomizableProfile);
  const billing = useStepStoreTwo((state) => state.billing);
  const onlineServiceIsChecked = useStepStoreThree((state) => state.onlineServiceIsChecked);
  const toggleOnlineService = useStepStoreThree((state) => state.toggleOnlineService);
  const largerStorageIsChecked = useStepStoreThree((state) => state.largerStorageIsChecked);
  const toggleLargerStorage = useStepStoreThree((state) => state.toggleLargerStorage);
  const customizableProfileIsChecked = useStepStoreThree((state) => state.customizableProfileIsChecked);
  const toggleCustomizableProfile = useStepStoreThree((state) => state.toggleCustomizableProfile);

  const onSubmitFormThree = handleSubmit((data) => {
    // console.log("step 3:", data);
    switch (billing) {
      case "monthly":
        if (data.onlineService) {
          setOnlineService(1);
        } else {
          setOnlineService(null);
        }
        break;
      case "yearly":
        if (data.onlineService) {
          setOnlineService(10);
        } else {
          setOnlineService(null);
        }
        break;
      default:
        break;
    }

    switch (billing) {
      case "monthly":
        if (data.largerStorage) {
          setLargerStorage(2);
        } else {
          setLargerStorage(null);
        }
        break;
      case "yearly":
        if (data.largerStorage) {
          setLargerStorage(20);
        } else {
          setLargerStorage(null);
        }
        break;
      default:
        break;
    }

    switch (billing) {
      case "monthly":
        if (data.customizableProfile) {
          setCustomizableProfile(2);
        } else {
          setCustomizableProfile(null);
        }
        break;
      case "yearly":
        if (data.customizableProfile) {
          setCustomizableProfile(20);
        } else {
          setCustomizableProfile(null);
        }
        break;
      default:
        break;
    }

    increaseStep();
  });
  // console.log(onlineService, largerStorage, customizableProfile);

  return (
    <div className={styles.addOns}>
      <form className={styles.planForm} onSubmit={onSubmitFormThree}>
        <div className={styles.checkboxesContainer}>
          <CheckboxComponent
            title="Online Service"
            text="Access to multiplayer games"
            type="onlineService"
            checked={onlineServiceIsChecked}
            setChecked={toggleOnlineService}
            formSettings={formSettings}
          />
          <CheckboxComponent
            title="Larger storage"
            text="Extra 1Tb of cloud save"
            type="largerStorage"
            checked={largerStorageIsChecked}
            setChecked={toggleLargerStorage}
            formSettings={formSettings}
          />
          <CheckboxComponent
            title="Customizable Profile"
            text="Custom theme on your profile"
            type="customizableProfile"
            checked={customizableProfileIsChecked}
            setChecked={toggleCustomizableProfile}
            formSettings={formSettings}
          />
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

export { AddOns };
