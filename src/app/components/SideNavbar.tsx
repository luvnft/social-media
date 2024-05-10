import Link from "next/link";

export const SideNavbar = () => {
  return (
    <div>
      <Link href="/feed">Feed</Link>
      <Link href="/profile">Profile</Link>
    </div>
  );
};
