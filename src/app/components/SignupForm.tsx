import Link from "next/link";
import { signup } from "../(auth)/actions";

export const SignupForm = () => {
  return (
    <form className="flex flex-col gap-y-4 py-4 px-6 border border-slate-400 rounded-md">
      <input
        type="email"
        name="email"
        placeholder="ex@example.com"
        className="py-2 px-4 border border-slate-400 outline-none rounded-md"
      />
      <input
        type="password"
        name="password"
        placeholder="••••••••"
        className="py-2 px-4 border border-slate-400 outline-none rounded-md"
      />
      <div className="flex gap-x-2">
        <button
          formAction={signup}
          className="border border-emerald-400 rounded-md py-1 px-3 flex-1 text-center"
        >
          Sign Up
        </button>
        <Link
          href="/"
          className="border border-slate-400 rounded-md py-1 px-3 flex-1 text-center"
        >
          Home
        </Link>
      </div>
      <p>
        Already have an account? <Link href="/login" className="underline">Log in</Link>
      </p>
    </form>
  );
};
