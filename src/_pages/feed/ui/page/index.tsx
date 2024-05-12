import { IProps } from "./props";
import { Posts } from "@/widgets";

const Feed = (props: IProps) => {
  // const supabase = createClient();
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();
  //
  // if (!user) {
  //   redirect("/login");
  // }
  return (
    <main className={"flex justify-center w-[84%]"}>
      <Posts />
    </main>
  );
};

export default Feed;
