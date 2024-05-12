import { Button } from "@/shared/shadcn/components/ui/button";
import { signup } from "@/processes";

export const SignupButton = () => {
  return (
    <Button type="submit" formAction={signup}>
      Sign Up
    </Button>
  );
};
