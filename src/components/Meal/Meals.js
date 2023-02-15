import React from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeal from "./AvailableMeal";

export default function Meals() {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeal />
    </React.Fragment>
  );
}
