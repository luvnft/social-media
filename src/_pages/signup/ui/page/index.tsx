import React from "react";
import { IProps } from "./props";

import { signup } from "@/processes";

const Signup = (props: IProps) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <form className="flex flex-col gap-y-4 w-[400px] mx-auto border border-slate-400 rounded-md p-6">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="border border-slate-400 outline-none py-2 px-4 rounded-sm"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="border border-slate-400 outline-none py-2 px-4"
          required
        />
        <button formAction={signup}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
