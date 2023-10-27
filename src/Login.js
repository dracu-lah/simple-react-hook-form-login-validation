// Dependencies
import React from "react";
import { useForm } from "react-hook-form";
// Styles
import "./tailwind.output.css";

/*
    Simple react-hook-form validation.
    Read react-hook-form docs for better understanding of other values that are being destructured from the useForm Hook.

*/

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Submitted Data: ", data);
  };

  return (
    <div className="min-h-screen bg-gray-500 flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-4">LOGIN</h1>
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          autoComplete="off"
          type="text"
          className="px-4 py-2 outline-none rounded-lg"
          placeholder="Username"
          name="username"
          {...register("username", {
            required: { value: true, message: "Please Enter First Name" },
            maxLength: { value: 20, message: "Atleast 20 characters required" }
          })}
        />
        {errors.username && (
          <div className="font-semibold">{errors.username.message}</div>
        )}
        <input
          autoComplete="off"
          type="password"
          className="px-4 py-2 outline-none rounded-lg"
          placeholder="Password"
          name="password"
          {...register("password", {
            required: { value: true, message: "Please Enter Password" },
            minLength: { value: 6, message: "Atleast 6 characters required" }
          })}
        />
        {errors.password && (
          <div className="font-semibold">{errors.password.message}</div>
        )}

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
