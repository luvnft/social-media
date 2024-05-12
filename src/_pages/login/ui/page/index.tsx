"use client";

import { LoginForm } from "@/widgets/login-form";
import { IProps } from "./props";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const Login = (props: IProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <LoginForm form={form} />
    </div>
  );
};

export default Login;
