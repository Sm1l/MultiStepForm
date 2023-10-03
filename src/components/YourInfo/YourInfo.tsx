import React from "react";
// import { UseFormReturn, useForm } from "react-hook-form";
import { useForm } from "react-hook-form";

import styles from "./YourInfo.module.scss";
import { useStepStoreOne, useStepStore } from "../../store/store";
// import { NextButton } from "../Buttons/NextButton";
import { IStepStoreOneStates } from "../../store/store";

interface YourInfoProps {}

const YourInfo: React.FC<YourInfoProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IStepStoreOneStates>({ mode: "onBlur" });

  const name = useStepStoreOne((state) => state.name);
  const setName = useStepStoreOne((state) => state.setName);
  const email = useStepStoreOne((store) => store.email);
  const setEmail = useStepStoreOne((state) => state.setEmail);
  const phone = useStepStoreOne((store) => store.phone);
  const setPhone = useStepStoreOne((state) => state.setPhone);
  const increaseStep = useStepStore((state) => state.increaseStep);

  const onSubmitFormOne = handleSubmit((data) => {
    // console.log("step 1:", data);
    setName(data.name);
    setEmail(data.email);
    setPhone(data.phone);
    increaseStep();
  });

  return (
    <div className={styles.yourInfo}>
      <form className={styles.yourInfoForm} onSubmit={onSubmitFormOne}>
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <div className={styles.error}>{errors?.name && <p>{errors?.name?.message || "error"}</p>}</div>
            <input
              className={errors?.name ? `${styles.input} ${styles.inputError}` : styles.input}
              type="text"
              id="name"
              defaultValue={name != null ? `${name}` : ""}
              placeholder="e.g. Stephen King"
              autoComplete="off"
              {...register("name", {
                required: "This field is required",
                minLength: { value: 2, message: "Min length is 2" },
              })}
            ></input>
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="email">
              Email Address
            </label>
            <div className={styles.error}>{errors?.email && <p>{errors?.email?.message || "error"}</p>}</div>
            <input
              className={errors?.email ? `${styles.input} ${styles.inputError}` : styles.input}
              type="email"
              id="email"
              defaultValue={email != null ? `${email}` : ""}
              placeholder="e.g. stephenking@lorem.com"
              autoComplete="off"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                  message: "Please enter correct email",
                },
              })}
            ></input>
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="phone">
              Phone Number
            </label>
            <div className={styles.error}>{errors?.phone && <p>{errors?.phone?.message || "error"}</p>}</div>
            <input
              className={errors?.phone ? `${styles.input} ${styles.inputError}` : styles.input}
              type="tel"
              id="phone"
              defaultValue={phone != null ? `${phone}` : ""}
              placeholder="e.g. +7 123 456 78 90"
              autoComplete="off"
              {...register("phone", {
                required: "This field is required",
                pattern: {
                  value: /^((\+7|7|8)+([0-9]){10})$/,
                  message: "Please enter correct phone",
                },
              })}
            ></input>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.nextButton} type="submit">
            next step
          </button>
        </div>
      </form>
    </div>
  );
};
export { YourInfo };
