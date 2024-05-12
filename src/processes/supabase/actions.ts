"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClientServer } from "@/processes";

export const login = async (formData: FormData) => {
  const supabase = createClientServer();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
};

export const signup = async (formData: FormData) => {
  const supabase = createClientServer();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  alert("Confirm your email.");
  redirect("/");
};

export const logout = async () => {
  const supabase = createClientServer();
  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/login");
};
