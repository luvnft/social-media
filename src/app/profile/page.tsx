import Image from "next/image";
import { Button } from "@/shared/shadcn/components/ui/button";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { LuUserPlus } from "react-icons/lu";
import { IoIosSettings } from "react-icons/io";
import { PostsSquare } from "@/widgets/posts-square";

const Profile = () => {
  return (
    <main className={"flex justify-center w-[82.5%]"}>
      {/* TODO разделить все на компоненты */}
      <div className={"w-[74%]"}>
        <div
          className={
            "py-9 px-16 flex items-center justify-start gap-24 border-b border-border"
          }
        >
          <button
            className={"rounded-full w-[150px] h-[150px] overflow-hidden"}
          >
            <Image
              src={"/img/utils/user-default-pfp.svg"}
              alt={"user-pfp"}
              width={150}
              height={150}
            />
          </button>
          <div className={"flex flex-col gap-4"}>
            <div className={"flex items-center gap-5"}>
              <button className={"text-xl"}>user.username</button>
              {/* Профиль других */}
              {/*<div className={"flex items-center gap-2"}>*/}
              {/*  <Button*/}
              {/*    size={"sm"}*/}
              {/*    className={*/}
              {/*      "px-5 text-black bg-secondary-button-background font-semibold hover:bg-secondary-button-hover transition-none"*/}
              {/*    }*/}
              {/*  >*/}
              {/*    Following*/}
              {/*  </Button>*/}
              {/*  <Button*/}
              {/*    size={"sm"}*/}
              {/*    className={*/}
              {/*      "px-5 text-black bg-secondary-button-background font-semibold hover:bg-secondary-button-hover transition-none"*/}
              {/*    }*/}
              {/*  >*/}
              {/*    Message*/}
              {/*  </Button>*/}
              {/*  <Button*/}
              {/*    size={"sm"}*/}
              {/*    className={*/}
              {/*      "px-2.5 text-black text-lg bg-secondary-button-background font-semibold hover:bg-secondary-button-hover transition-none"*/}
              {/*    }*/}
              {/*  >*/}
              {/*    <LuUserPlus />*/}
              {/*  </Button>*/}
              {/*  <button className={"text-3xl"}>*/}
              {/*    <HiOutlineDotsHorizontal />*/}
              {/*  </button>*/}
              {/*</div>*/}

              {/* Профиль юзера */}
              <div className={"flex items-center gap-2"}>
                <Button
                  size={"sm"}
                  className={
                    "px-5 text-black bg-secondary-button-background font-semibold hover:bg-secondary-button-hover transition-none"
                  }
                >
                  Edit profile
                </Button>
                <Button
                  size={"sm"}
                  className={
                    "px-5 text-black bg-secondary-button-background font-semibold hover:bg-secondary-button-hover transition-none"
                  }
                >
                  View archive
                </Button>
                <button className={"text-3xl"}>
                  <IoIosSettings />
                </button>
              </div>
            </div>
            <div className={"flex items-center gap-10"}>
              <p>
                <span className={"font-semibold"}>13</span> posts
              </p>
              <p>
                <span className={"font-semibold"}>99</span> followers
              </p>
              <p>
                <span className={"font-semibold"}>99</span> following
              </p>
            </div>
            <div className={"text-sm font-semibold"}>
              <p>it/zer/zim</p>
            </div>
          </div>
        </div>
        <div className={"py-14"}>
          <PostsSquare />
        </div>
      </div>
    </main>
  );
};

export default Profile;
