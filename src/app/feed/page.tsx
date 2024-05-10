import { FeedPost } from "../components/FeedPost";
import { createClient } from "../../../utils/supabase/server";
import { redirect } from "next/navigation";

const Feed = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="w-max mx-auto flex flex-col gap-8">
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
    </div>
  );
};

export default Feed;
