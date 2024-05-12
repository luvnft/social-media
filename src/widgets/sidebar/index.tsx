"use client";

import { IProps } from "./props";
import Link from "next/link";
import { Button } from "@/shared/shadcn/components/ui/button";
import { TiHomeOutline, TiHome } from "react-icons/ti";
import { FiSearch } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { BsPlusSquare } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Sidebar = (props: IProps) => {
  const router = useRouter();

  return (
    <nav className={"relative w-[16%] border-r min-h-screen"}>
      <div
        className={"fixed p-3 w-[244px] h-full flex flex-col justify-between"}
      >
        <div>
          <div className={"text-xl italic font-bold px-4 py-7"}>
            <Link href={"/"}>ChatApp</Link>
          </div>
          {/* TODO сделать активные ссылки */}
          <div className={"flex flex-col gap-2"}>
            <Button
              variant={"ghost"}
              className={
                "group group justify-start hover:bg-hover flex items-center gap-3 py-6 px-3 font-bold"
              }
              onClick={() => router.push("/")}
            >
              <TiHome
                className={
                  "w-6 h-6 group-hover:scale-110 transition ease-linear duration-100"
                }
              />
              <p>Home</p>
            </Button>
            <Button
              variant={"ghost"}
              className={
                "group justify-start hover:bg-hover flex items-center gap-3 py-6 px-3 font-normal"
              }
            >
              <FiSearch
                className={
                  "w-6 h-6 group-hover:scale-110 transition ease-linear duration-100"
                }
              />
              <p>Search</p>
            </Button>
            <Button
              variant={"ghost"}
              className={
                "group justify-start hover:bg-hover flex items-center gap-3 py-6 px-3 font-normal"
              }
            >
              <AiOutlineMessage
                className={
                  "w-6 h-6 group-hover:scale-110 transition ease-linear duration-100"
                }
              />
              <p>Messages</p>
            </Button>
            <Button
              variant={"ghost"}
              className={
                "group justify-start hover:bg-hover flex items-center gap-3 py-6 px-3 font-normal"
              }
            >
              <FaRegHeart
                className={
                  "w-6 h-6 group-hover:scale-110 transition ease-linear duration-100"
                }
              />
              <p>Notifications</p>
            </Button>
            <Button
              variant={"ghost"}
              className={
                "group justify-start hover:bg-hover flex items-center gap-3 py-6 px-3 font-normal"
              }
            >
              <BsPlusSquare
                className={
                  "w-6 h-6 group-hover:scale-110 transition ease-linear duration-100"
                }
              />
              <p>Create</p>
            </Button>
            <Button
              variant={"ghost"}
              className={
                "group justify-start hover:bg-hover flex items-center gap-3 py-6 px-3 font-normal"
              }
              onClick={() => router.push("/profile")}
            >
              <div
                className={
                  "w-6 h-6 rounded-full overflow-hidden group-hover:scale-110 transition ease-linear duration-100"
                }
              >
                <Image
                  src="/img/utils/user-default-pfp.svg"
                  alt={"user-pfp"}
                  width={24}
                  height={24}
                />
              </div>
              <p>Profile</p>
            </Button>
          </div>
        </div>
        <div className={"flex flex-col gap-2"}>
          <Button
            variant={"ghost"}
            className={
              "group justify-start hover:bg-hover flex items-center gap-3 py-6 px-3 font-normal"
            }
          >
            <RxHamburgerMenu
              className={
                "w-6 h-6 group-hover:scale-110 transition ease-linear duration-100"
              }
            />
            <p>More</p>
          </Button>
        </div>
      </div>
    </nav>
  );
};
