import React from "react";
import ClassNames from "classnames";

const Steps = props => {
  const { step } = props;
  const stepItems = [
    { id: 1, name: "Basic" },
    { id: 2, name: "Contacts" },
    { id: 3, name: "Avatar" },
    { id: 4, name: "Finish" }
  ];
  return stepItems.map(item => (
    <div
      className={ClassNames("step", {
        "is-active": item.id === step,
        "is-completed": item.id < step
      })}
      key={item.id}
    >
      <div className="step__marker">{item.id}</div>
      <div className="step__title mt-1">{item.name}</div>
    </div>
  ));
};

export default Steps;
