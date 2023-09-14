"use client";

import axios from "axios";
import { useState } from "react";

interface ErrorType {
  message: string;
}

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<ErrorType[]>();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ticketing.dev/api/users/signup",
        {
          email,
          password,
        }
      );
      console.log(response.data);
    } catch (e) {
      setErrors(e.response.data.errors);
    }
  };
  return (
    <div className="w-full flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex px-4 rounded-lg  flex-col gap-6"
      >
        <h1 className="text-4xl font-bold">SIGN UP</h1>
        <div className="flex flex-col gap-2 font-mono  ">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            className="px-6 py-3 rounded-lg text-emerald-700"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 font-mono  ">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            className="px-6 py-3 rounded-lg  text-emerald-700"
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errors && errors.length > 0 && (
          <div className="flex flex-col gap-2 font-mono  ">
            <ul>
              {errors.map((err) => (
                <li
                  key={err.message}
                  className="text-red-500"
                >
                  {err.message}
                </li>
              ))}
            </ul>
          </div>
        )}
        <button
          type="submit"
          className="px-3 rounded-lg py-2 hover:bg-emerald-300 bg-emerald-500"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Page;
