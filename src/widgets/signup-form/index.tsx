import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/shadcn/components/ui/form";
import { IProps } from "./props";

import { Input } from "@/shared/shadcn/components/ui/input";
import Link from "next/link";

import { SignupButton } from "@/features/auth/signup-button/ui";

export const SignupForm = ({ form }: IProps) => {
  return (
    <Form {...form}>
      <form className="w-[500px] flex flex-col gap-y-4 border border-slate-400 rounded-md p-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="you@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="••••••••" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <SignupButton />
        <p>
          Already have an account? <Link href="/login">Log in</Link>
        </p>
      </form>
    </Form>
  );
};
