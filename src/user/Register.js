import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {
  const { handleSubmit, control, watch } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/login")

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form mt-5">
      <h1 className="text-center text-light mb-3">Register</h1>
      <Controller
        name="name"
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <div className="form-field">
            <input {...field} placeholder="Name" className="input-field" />
            {fieldState.error && (
              <p className="error-message">This field is required</p>
            )}
          </div>
        )}
      />

      <Controller
        name="email"
        control={control}
        rules={{ required: true, pattern: /^\S+@\S+$/i }}
        render={({ field, fieldState }) => (
          <div className="form-field">
            <input
              {...field}
              type="email"
              placeholder="Email"
              className="input-field"
            />
            {fieldState.error && (
              <p className="error-message">Invalid email format</p>
            )}
          </div>
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{ required: true, minLength: 8 }}
        render={({ field, fieldState }) => (
          <div className="form-field">
            <input
              {...field}
              type="password"
              placeholder="Password"
              className="input-field"
            />
            {fieldState.error && (
              <p className="error-message">
                Password must be at least 8 characters long
              </p>
            )}
          </div>
        )}
      />

      <Controller
        name="passwordConfirmation"
        control={control}
        rules={{
          required: true,
          validate: (value) => value === watch("password"),
        }}
        render={({ field, fieldState }) => (
          <div className="form-field">
            <input
              {...field}
              type="password"
              placeholder="Confirm Password"
              className="input-field"
            />
            {fieldState.error && (
              <p className="error-message">Passwords do not match</p>
            )}
          </div>
        )}
      />

      <button type="submit" className="submit-button">
        Register
      </button>
    </form>
  );
}

export default Register;
