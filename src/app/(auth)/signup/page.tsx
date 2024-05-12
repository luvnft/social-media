"use client";

import React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SignupForm } from "@/widgets/signup-form";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const Signup = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <SignupForm form={form} />
    </div>
  );
};

export default Signup;
