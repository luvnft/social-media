import { IProps } from "./props";
import Image from "next/image";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegHeart, FaRegBookmark } from "react-icons/fa6";
import { FiMessageCircle } from "react-icons/fi";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import Link from "next/link";

export const Post = (props: IProps) => {
  return (
    <div
      className={"w-[468px] flex flex-col gap-3 pb-3 border-b border-border"}
    >
      <div className={"flex items-center justify-between"}>
        <div className={"flex items-center gap-3"}>
          {/* TODO вынести pfp, имя, и т.д. на /entities/user */}
          <div className={"w-8 h-8 overflow-hidden"}>
            <Image
              src={"/img/utils/user-default-pfp.svg"}
              alt={"user-pfp"}
              width={32}
              height={32}
            />
          </div>
          <div className={"flex flex-col"}>
            <Link href={""} className={"flex items-center gap-1"}>
              <p className={"text-sm font-semibold"}>author.username</p>
              <span className={"text-sm text-secondary"}>•</span>
              <span className={"text-sm text-secondary"}>2d</span>
            </Link>
            <p className={"text-xs"}>Subtitle</p>
          </div>
        </div>
        <button>
          <HiOutlineDotsHorizontal className={"text-xl"} />
        </button>
      </div>
      <div
        className={"rounded overflow-hidden min-w-[468] border border-border"}
      >
        <img
          src="https://placehold.co/500"
          className={"w-full"}
          alt="post-img"
        />
      </div>
      <div className={"flex items-center justify-between"}>
        <div className={"flex items-center gap-3"}>
          <button className={"hover:text-hover-icon"}>
            <FaRegHeart className={"w-6 h-6"} />
          </button>
          <button className={"hover:text-hover-icon"}>
            <FiMessageCircle className={"w-6 h-6"} />
          </button>
          <button className={"hover:text-hover-icon"}>
            <PiPaperPlaneTiltBold className={"w-6 h-6"} />
          </button>
        </div>
        <button className={"hover:text-hover-icon"}>
          <FaRegBookmark className={"w-6 h-6"} />
        </button>
      </div>
      <div className={"flex flex-col gap-1"}>
        <span className={"font-medium text-sm"}>35 likes</span>
        <div className={"flex items-center gap-1"}>
          <Link href={""} className={"text-sm font-semibold"}>
            author.username
          </Link>
          <p className={"text-sm"}>Я твой не русский джентльмен.</p>
        </div>
        <form className={"flex items-center justify-between"}>
          {/* TODO скрыть кнопку Post когда инпут пустой */}
          <textarea
            placeholder={"Add comment..."}
            className={
              "resize-none w-full min-h-1 max-h-6 outline-none text-sm"
            }
          />
          <button
            className={
              "p-0 h-fit text-sm font-medium text-primary-button hover:text-link"
            }
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};
