import React, { Fragment } from "react";
import countries from "../../data/countries";

export default class Finish extends React.PureComponent {
  render() {
    const {
      values: { firstname, lastname, email, mobile, country, city, avatar }
    } = this.props;
    const countryObj = countries.find(el => el.id === parseInt(country));
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row mb-4">
            <div className="col-4">
              <img width="100%" src={avatar} alt="my-avatar" />
            </div>
            <div className="col-8 d-flex align-items-center">
              <h4>
                {firstname} {lastname}
              </h4>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12">
              <p>
                <strong>Email:</strong> {email}
              </p>
              <p>
                <strong>Mobile:</strong> {mobile}
              </p>
              <p>
                <strong>Location:</strong> {countryObj.name}, {city}
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
