import dynamic from "next/dynamic";

export const Profile = dynamic(() => import("./ui/page"));
