import React from "react";
import Basic from "./steps/Basic";
import Contacts from "./steps/Contacts";
import Avatar from "./steps/Avatar";
import Finish from "./steps/Finish";
import Steps from "./_partials/Steps";
import Buttons from "./_partials/Buttons";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.initalState = {
      step: 1,
      values: {
        firstname: "",
        lastname: "",
        password: "",
        repeatPassword: "",
        gender: "male",
        email: "",
        mobile: "",
        country: 1,
        city: 0,
        avatar: ""
      },
      errors: {}
    };

    this.state = { ...this.initalState };
  }

  onChange = event => {
    const values = this.state.values;
    this.setState({
      values: {
        ...values,
        [event.target.name]: event.target.value
      }
    });
  };
  onChangeAvatar = event => {
    const values = this.state.values;

    const reader = new FileReader();
    reader.onload = event => {
      this.setState({
        values: {
          ...values,
          avatar: event.target.result
        }
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  validate = () => {
    const errors = {};
    const {
      firstname,
      lastname,
      password,
      repeatPassword,
      email,
      mobile,
      country,
      city,
      avatar
    } = this.state.values;
    switch (this.state.step) {
      case 1:
        if (!firstname) {
          errors.firstname = "Required!";
        } else if (firstname.length < 5) {
          errors.firstname = "Username must be 5 characters or more";
        }
        if (!lastname) {
          errors.lastname = "Required!";
        } else if (lastname.length < 5) {
          errors.lastname = "Lastname must be 5 characters or more";
        }
        if (!password) {
          errors.password = "Required!";
        } else if (password.length < 6) {
          errors.password = "must be 6 characters or more";
        }
        if (password !== repeatPassword) {
          errors.repeatPassword = "Passwords should be equal!";
        }
        break;
      case 2:
        if (!email) {
          errors.email = "Required!";
        } else if (email.length < 6) {
          errors.email = "Email is not valid!";
        }
        if (!mobile) {
          errors.mobile = "Required!";
        } else if (mobile.length !== 10) {
          errors.mobile = "Phone is not valid!";
        }
        if (!country) {
          errors.country = "Required!";
        }
        if (!city) {
          errors.city = "Required!";
        }
        break;
      case 3:
        if (!avatar) {
          errors.avatar = "Required!";
        }
        break;
      default:
        return null;
    }

    return errors;
  };

  nextStep = event => {
    event.preventDefault();
    const errors = this.validate();

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors: errors
      });
    } else {
      this.setState(prevState => ({
        step: prevState.step + 1
      }));
    }
  };

  prevStep = event => {
    event.preventDefault();
    this.setState(prevState => ({
      step: prevState.step - 1
    }));
  };
  resetAll = event => {
    event.preventDefault();
    this.setState({
      ...this.initalState
    });
  };
  render() {
    const step = this.state.step;
    return (
      <div className="form-container card">
        <form className="form card-body">
          <div className="steps mb-4">
            <Steps step={step} />
          </div>
          {step === 1 && (
            <Basic
              values={this.state.values}
              errors={this.state.errors}
              onChange={this.onChange}
            />
          )}
          {step === 2 && (
            <Contacts
              values={this.state.values}
              errors={this.state.errors}
              onChange={this.onChange}
            />
          )}

          {step === 3 && (
            <Avatar
              avatar={this.state.values.avatar}
              errors={this.state.errors}
              onChange={this.onChangeAvatar}
            />
          )}
          {step === 4 && <Finish values={this.state.values} />}
          <Buttons
            step={step}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            resetAll={this.resetAll}
          />
        </form>
      </div>
    );
  }
}
