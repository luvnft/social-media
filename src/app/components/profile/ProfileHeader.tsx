import { redirect } from "next/navigation";
import { createClient } from "../../../../utils/supabase/server";

export const ProfileHeader = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="border border-slate-400 py-8 px-12">
      <div className="flex items-center gap-4">
        <div className="w-[100px] h-[100px] rounded-full border border-slate-400"></div>
        <div>
          <h1>{user ? user.email : "Anon"}</h1>
          <p>Software engineer / Fullstack developer</p>
        </div>
      </div>
    </div>
  );
};
