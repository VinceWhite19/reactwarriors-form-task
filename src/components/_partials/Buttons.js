import React, { Fragment } from "react";

const Buttons = props => {
  const { step, prevStep, nextStep, resetAll } = props;

  return (
    <Fragment>
      {step < 3 && (
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-light mr-4"
            disabled={step === 0 ? true : false}
            onClick={prevStep}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={nextStep}
          >
            Next
          </button>
        </div>
      )}
      {step === 3 && (
        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-primary" onClick={resetAll}>
            Reset
          </button>
        </div>
      )}
    </Fragment>
  );
};
export default Buttons;
