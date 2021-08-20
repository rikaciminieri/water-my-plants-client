import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import schema from "../schema";
import { Link } from "react-router-dom";

const initialFormValues = {
  username: "",
  phoneNumber: "",
  password: "",
};

const initialFormErrors = {
  username: "",
  phoneNumber: "",
  password: "",
};

const initialDisabled = true;

const SignUpForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;

    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.message });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const newUser = {
      username: formValues.username.trim(),
      phoneNumber: formValues.phoneNumber.trim(),
      password: formValues.password.trim(),
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="flex flex-col mx-auto items-center max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
        Create a new account
      </div>
      <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
        {`Already have an account? `}
        <Link
          to="/sign-in"
          target="_blank"
          className="text-sm text-blue-500 underline hover:text-blue-700"
        >
          Sign in
        </Link>
      </span>
      <div className="p-6 mt-8 w-full">
        <form onSubmit={onSubmit}>
          <div className="text-sm text-red-500">
            <div id="usernameError">{formErrors.username}</div>
            <div id="phoneNumberError">{formErrors.phoneNumber}</div>
            <div id="passwordError">{formErrors.password}</div>
          </div>
          <div className="flex flex-col mb-2">
            <div className="relative">
              <input
                type="text"
                name="username"
                placeholder="Enter a username"
                onChange={onChange}
                className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className=" relative ">
              <input
                type="text"
                name="phoneNumber"
                placeholder="Enter your phone number"
                onChange={onChange}
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className=" relative ">
              <input
                type="password"
                name="password"
                placeholder="Enter a password"
                onChange={onChange}
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex w-full my-4">
            <button
              type="submit"
              disabled={disabled}
              className="py-2 px-4  bg-green-500 hover:bg-green-600 focus:ring-green-400 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Sign Up!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
