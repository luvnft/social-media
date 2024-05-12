import { IProps } from "./props";
import { FaHeart } from "react-icons/fa6";
import { TbMessageCircle2Filled } from "react-icons/tb";

export const PostSquare = (props: IProps) => {
  return (
    <button
      className={"group relative max-w-[309px] max-h-[309px] overflow-hidden"}
    >
      <img src="https://placehold.co/309" alt="picture" />
      <div
        className={
          "z-10 absolute top-0 group-hover:flex hidden bg-hover-post w-[309px] h-[309px] text-white items-center justify-center gap-5 text-lg"
        }
      >
        <div className={"flex items-center gap-2"}>
          <FaHeart className={"text-xl"} />
          <p className={"font-semibold"}>23</p>
        </div>
        <div className={"flex items-center gap-2"}>
          <TbMessageCircle2Filled className={"text-xl"} />
          <p className={"font-semibold"}>0</p>
        </div>
        <div></div>
      </div>
    </button>
  );
};
