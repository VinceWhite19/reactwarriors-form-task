import React, { Fragment } from "react";
import defaultAvatar from "../../stylesheets/default-avatar.png";

const Avatar = props => {
  const { avatar, onChange, errors } = props;

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
            onChange={onChange}
            error={errors.avatar}
          />
          <label
            className={
              errors.avatar ? "custom-file-label invalid" : "custom-file-label"
            }
            htmlFor="customFile"
          >
            Choose avatar
          </label>
          {errors.avatar ? (
            <div className="invalid-feedback">{errors.avatar}</div>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
};

export default Avatar;
