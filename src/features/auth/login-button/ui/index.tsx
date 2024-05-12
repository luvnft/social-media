import { Button } from "@/shared/shadcn/components/ui/button";
import { login } from "@/processes";

export const LoginButton = () => {
  return (
    <Button type="submit" formAction={login}>
      Log In
    </Button>
  );
};
