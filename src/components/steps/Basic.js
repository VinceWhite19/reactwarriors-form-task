import React, { Fragment } from "react";
import Field from "../_partials/Field";

const Basic = props => {
  const {
    values: { firstname, lastname, password, repeatPassword, gender },
    onChange,
    errors
  } = props;

  return (
    <Fragment>
      <Field
        id="firstname"
        labelText="Firstname"
        placeholder="Enter firstname"
        type="text"
        name="firstname"
        value={firstname}
        onChange={onChange}
        error={errors.firstname}
      />
      <Field
        id="lastname"
        labelText="Lastname"
        placeholder="Enter lastname"
        type="text"
        name="lastname"
        value={lastname}
        onChange={onChange}
        error={errors.lastname}
      />
      <Field
        id="password"
        labelText="Password"
        placeholder="Enter password"
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        error={errors.password}
      />
      <Field
        id="repeatPassword"
        labelText="Repeat password"
        placeholder="Enter repeat password"
        type="password"
        name="repeatPassword"
        value={repeatPassword}
        onChange={onChange}
        error={errors.repeatPassword}
      />

      <fieldset className="form-group">
        <div>Gender</div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={gender === "male"}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={gender === "female"}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
      </fieldset>
    </Fragment>
  );
};

export default Basic;
