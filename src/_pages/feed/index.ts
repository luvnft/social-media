import dynamic from "next/dynamic";

export const Feed = dynamic(() => import("./ui/page"));
