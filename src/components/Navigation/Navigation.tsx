import React from "react";

import styles from "./Navigation.module.scss";
import { NavItem } from "../NavItem";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav className={styles.navigation}>
      <NavItem num={1} title="your info" />
      <NavItem num={2} title="select plan" />
      <NavItem num={3} title="add-ons" />
      <NavItem num={4} title="summary" />
    </nav>
  );
};

export { Navigation };
