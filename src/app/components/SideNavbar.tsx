import Link from "next/link";
import { logout } from "../(auth)/actions";

export const SideNavbar = () => {
  const navLinks = [
    { title: "Feed", link: "feed" },
    { title: "Profile", link: "profile" },
    { title: "Log In", link: "login" },
    { title: "Sign Up", link: "signup" },
  ];
  return (
    <div className="flex flex-col border border-slate-400 py-6 px-4 gap-4 h-screen">
      {navLinks.map((navLink, index) => {
        return (
          <Link
            key={index}
            href={navLink.link}
            className="border border-slate-400 py-2 px-4"
          >
            {navLink.title}
          </Link>
        );
      })}
      <form>
        <button formAction={logout} className="border border-slate-400 py-2 px-4">Log Out</button>
      </form>
    </div>
  );
};
