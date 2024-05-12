import { IProps } from "./props";
import { Sidebar } from "@/widgets";

export const AppContainer = ({ children }: IProps) => {
  return (
    <div className={"flex"}>
      <Sidebar />
      {children}
    </div>
  );
};
