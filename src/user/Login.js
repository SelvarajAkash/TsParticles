import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function Login() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form mt-5">
      <h1 className='text-light text-center mb-3'>Login</h1>
      <Controller
        name="username"
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <div className="form-field">
            <input {...field} placeholder="Username" className="input-field" />
            {fieldState.error && <p className="error-message">This field is required</p>}
          </div>
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <div className="form-field">
            <input {...field} type="password" placeholder="Password" className="input-field" />
            {fieldState.error && <p className="error-message">This field is required</p>}
          </div>
        )}
      />

      <button type="submit" className="submit-button btn-primary">Login</button>
    </form>
  );
}

export default Login;
