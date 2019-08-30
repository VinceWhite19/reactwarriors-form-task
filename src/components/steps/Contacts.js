import React, { Fragment } from "react";
import Field from "../_partials/Field";
import countries from "../../data/countries";
import cities from "../../data/cities";

export default class Contacts extends React.PureComponent {
  getOptionsList = items => {
    return items.map(item => (
      <option key={item.name} value={item.id}>
        {item.name}
      </option>
    ));
  };

  getCities = country => {
    let validCities = [];
    for (let key in cities) {
      if (parseInt(country) === cities[key].country) {
        validCities.push(cities[key]);
      }
    }
    return validCities;
  };

  render() {
    const {
      values: { email, mobile, country, city },
      onChange,
      errors
    } = this.props;

    let citiesList = this.getCities(country);

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
            {this.getOptionsList(countries)}
          </select>
          {errors.country && (
            <div className="invalid-feedback">{errors.country}</div>
          )}
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
            {this.getOptionsList(citiesList)}
          </select>
          {errors.city && <div className="invalid-feedback">{errors.city}</div>}
        </div>
      </Fragment>
    );
  }
}
