import React, { Fragment } from "react";
import Field from "../_partials/Field";
import countries from "../../data/countries";
import cities from "../../data/cities";

const Contacts = props => {
  const {
    values: { email, mobile, country, city },
    onChange,
    errors
  } = props;

  const getOptionsList = items => {
    return items.map(item => (
      <option key={item.name} value={item.id}>
        {item.name}
      </option>
    ));
  };

  const getCities = country => {
    let validCities = [];
    for (let key in cities) {
      if (parseInt(country) === cities[key].country) {
        validCities.push(cities[key]);
      }
    }
    return validCities;
  };

  let citiesList = getCities(country);
  return (
    <Fragment>
      <Field
        id="email"
        labelText="Email"
        placeholder="Enter email"
        type="text"
        name="email"
        value={email}
        onChange={onChange}
        error={errors.email}
      />
      <Field
        id="mobile"
        labelText="Mobile"
        placeholder="Enter mobile"
        type="tel"
        name="mobile"
        value={mobile}
        onChange={onChange}
        error={errors.mobile}
      />

      <div className="form-group">
        <label htmlFor="country">Country</label>
        <select
          className={errors.country ? "form-control invalid" : "form-control"}
          id="country"
          value={country}
          name="country"
          onChange={onChange}
          error={errors.country}
        >
          {getOptionsList(countries)}
        </select>
        {errors.country ? (
          <div className="invalid-feedback">{errors.country}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="city">Country</label>
        <select
          className={errors.city ? "form-control invalid" : "form-control"}
          id="city"
          value={city}
          name="city"
          onChange={onChange}
          error={errors.city}
        >
          <option id="select_city" value="0">
            Select city
          </option>
          {getOptionsList(citiesList)}
        </select>
        {errors.city ? (
          <div className="invalid-feedback">{errors.city}</div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default Contacts;
