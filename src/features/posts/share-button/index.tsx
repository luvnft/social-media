"use client";

import { Button } from "@/shared/shadcn/components/ui/button";
import { createClient } from "@/../utils/supabase/client";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

export const ShareButton = () => {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>();

  const getUser = async () => {
    const {
      data: { user: supabaseUser },
      error,
    } = await supabase.auth.getUser();
    if (supabaseUser) setUser(supabaseUser);
    console.log(supabaseUser);
  };

  useEffect(() => {
    getUser();
  }, []);

  // Store image to storage
  // Add row to "posts" table
  return (
    <Button className="flex-1 bg-emerald-500 text-white" disabled={!!user}>
      Share
    </Button>
  );
};
