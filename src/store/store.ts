import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type StepType = 1 | 2 | 3 | 4;

interface IStepState {
  step: StepType;
  increaseStep: () => void;
  decreaseStep: () => void;
  setStep: (num: StepType) => void;
}

export const useStepStore = create<IStepState>()(
  // devtools(
  (set) => ({
    step: 1,
    increaseStep: () => set((state) => ({ step: (state.step + 1) as StepType })),
    decreaseStep: () => set((state) => ({ step: (state.step - 1) as StepType })),
    setStep: (num) => set(() => ({ step: num })),
  })
  // ,
  //   { name: "StepStore" }
  // )
);

//*-------StepStoreOne
export interface IStepStoreOneStates {
  name: string | null;
  email: string | null;
  phone: number | null;
}

interface IStepStoreOneActions {
  setName: (name: string | null) => void;
  setEmail: (email: string | null) => void;
  setPhone: (phone: number | null) => void;
}

export const useStepStoreOne = create<IStepStoreOneStates & IStepStoreOneActions>()(
  // devtools(
  (set) => ({
    name: null,
    email: null,
    phone: null,
    setName: (name) => set({ name: name }),
    setEmail: (email) => set(() => ({ email: email })),
    setPhone: (phone) => set(() => ({ phone: phone })),
  })
  //,{name:"StepStoreOne"} )
);
//*-------StepStoreTwo
export type TPlanType = "arcade" | "advanced" | "pro";
export type TBillingType = "monthly" | "yearly";
export type TPlanCostType = null | 9 | 12 | 15 | 90 | 120 | 150;

export interface IStepStoreTwoStates {
  plan: TPlanType;
  billing: TBillingType;
  planCost: TPlanCostType;
}

interface IStepStoreTwoActions {
  setPlan: (plan: TPlanType) => void;
  setBilling: (billing: TBillingType) => void;
  setPlanCost: (planCost: TPlanCostType) => void;
}

export const useStepStoreTwo = create<IStepStoreTwoStates & IStepStoreTwoActions>()(
  // devtools(
  (set) => ({
    plan: "arcade",
    billing: "monthly",
    planCost: null,
    setPlan: (plan) => set(() => ({ plan: plan })),
    setBilling: (billing) => set(() => ({ billing: billing })),
    setPlanCost: (planCost) => set(() => ({ planCost: planCost })),
  })
  // )
);

//*-------StepStoreThree
export type TOnlineServiceType = null | 1 | 10;
export type TLargerStorageType = null | 2 | 20;
export type TCustomizableProfileType = null | 2 | 20;

export interface IStepStoreThreeStates {
  onlineService: TOnlineServiceType;
  largerStorage: TLargerStorageType;
  customizableProfile: TCustomizableProfileType;
  onlineServiceIsChecked: boolean;
  largerStorageIsChecked: boolean;
  customizableProfileIsChecked: boolean;
}

interface IStepStoreThreeActions {
  setOnlineService: (onlineService: TOnlineServiceType) => void;
  setLargerStorage: (largerStorage: TLargerStorageType) => void;
  setCustomizableProfile: (customizableProfile: TCustomizableProfileType) => void;
  toggleOnlineService: (onlineServiceIsChecked: boolean) => void;
  toggleLargerStorage: (largerStorageIsChecked: boolean) => void;
  toggleCustomizableProfile: (customizableProfileIsChecked: boolean) => void;
}

export const useStepStoreThree = create<IStepStoreThreeStates & IStepStoreThreeActions>()(
  // devtools(
  (set) => ({
    onlineService: null,
    largerStorage: null,
    customizableProfile: null,
    onlineServiceIsChecked: false,
    largerStorageIsChecked: false,
    customizableProfileIsChecked: false,
    setOnlineService: (onlineService) => set(() => ({ onlineService: onlineService })),
    setLargerStorage: (largerStorage) => set(() => ({ largerStorage: largerStorage })),
    setCustomizableProfile: (customizableProfile) => set(() => ({ customizableProfile: customizableProfile })),
    toggleOnlineService: (onlineServiceIsChecked) => set(() => ({ onlineServiceIsChecked: onlineServiceIsChecked })),
    toggleLargerStorage: (largerStorageIsChecked) => set(() => ({ largerStorageIsChecked: largerStorageIsChecked })),
    toggleCustomizableProfile: (customizableProfileIsChecked) =>
      set(() => ({ customizableProfileIsChecked: customizableProfileIsChecked })),
  })
  // )
);

//!-----------------------

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

export const useBearStore = create<BearState>()(
  devtools((set) => ({
    bears: 1,
    increase: (by) => set(() => ({ bears: by })),
  }))
);
//*---------------
