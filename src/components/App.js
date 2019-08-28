import React from "react";
import Basic from "./steps/Basic";
import Contacts from "./steps/Contacts";
import Avatar from "./steps/Avatar";
import Finish from "./steps/Finish";
import Steps from "./_partials/Steps";
import Buttons from "./_partials/Buttons";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.initalState = {
      step: 0,
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
    const fields = this.state.values;
    switch (this.state.step) {
      case 0:
        if (!fields.firstname) {
          errors.firstname = "Required!";
        } else if (fields.firstname.length < 5) {
          errors.firstname = "Username must be 5 characters or more";
        }
        if (!fields.lastname) {
          errors.lastname = "Required!";
        } else if (fields.lastname.length < 5) {
          errors.lastname = "Lastname must be 5 characters or more";
        }
        if (!fields.password) {
          errors.password = "Required!";
        } else if (fields.password.length < 6) {
          errors.password = "must be 6 characters or more";
        }
        if (fields.password !== fields.repeatPassword) {
          errors.repeatPassword = "Passwords should be equal!";
        }
        break;
      case 1:
        if (!fields.email) {
          errors.email = "Required!";
        } else if (fields.email.length < 6) {
          errors.email = "Email is not valid!";
        }
        if (!fields.mobile) {
          errors.mobile = "Required!";
        } else if (fields.mobile.length !== 10) {
          errors.mobile = "Phone is not valid!";
        }
        if (!fields.country) {
          errors.country = "Required!";
        }
        if (!fields.city) {
          errors.city = "Required!";
        }
        break;
      case 2:
        if (!fields.avatar) {
          errors.avatar = "Required!";
        }
        break;
      default:
        return null;
    }

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors: errors
      });
      return false;
    } else {
      this.setState({
        errors: {}
      });
      return true;
    }
  };

  nextStep = event => {
    event.preventDefault();
    if (this.validate()) {
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
          {step === 0 && (
            <Basic
              values={this.state.values}
              errors={this.state.errors}
              onChange={this.onChange}
            />
          )}
          {step === 1 && (
            <Contacts
              values={this.state.values}
              errors={this.state.errors}
              onChange={this.onChange}
            />
          )}

          {step === 2 && (
            <Avatar
              avatar={this.state.values.avatar}
              errors={this.state.errors}
              onChange={this.onChangeAvatar}
            />
          )}
          {step === 3 && <Finish values={this.state.values} />}
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
