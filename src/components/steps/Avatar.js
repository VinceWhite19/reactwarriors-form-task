import React, { Fragment } from "react";
import defaultAvatar from "../../stylesheets/default-avatar.png";

export default class Avatar extends React.PureComponent {
  render() {
    const { avatar, onChange, errors } = this.props;

    const onChangeAvatar = event => {
      const reader = new FileReader();
      reader.onload = e => {
        onChange({
          target: {
            name: "avatar",
            value: e.target.result
          }
        });
      };
      reader.readAsDataURL(event.target.files[0]);
    };

    return (
      <Fragment>
        <img
          className="mb-4"
          width="100%"
          src={avatar ? avatar : defaultAvatar}
          alt="avatar"
        />

        <div className="mb-4">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              name="customFile"
              id="customFile"
              onChange={onChangeAvatar}
              error={errors.avatar}
            />
            <label
              className={
                errors.avatar
                  ? "custom-file-label invalid"
                  : "custom-file-label"
              }
              htmlFor="customFile"
            >
              Choose avatar
            </label>
            {errors.avatar && (
              <div className="invalid-feedback">{errors.avatar}</div>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}
