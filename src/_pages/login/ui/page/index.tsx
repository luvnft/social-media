import { IProps } from "./props";

import { login } from "@/processes";

const Login = (props: IProps) => {
  return (
    <div>
      <form className="flex flex-col">
        <input
          type="email"
          name="email"
          id="email"
          className="border border-slate-400 outline-none"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          className="border border-slate-400 outline-none"
          required
        />
        <button formAction={login}>Log In</button>
      </form>
    </div>
  );
};

export default Login;
