import { IProps } from "./props";
import { PostSquare } from "@/widgets/posts-square/ui/post-square";

export const PostsSquare = (props: IProps) => {
  return (
    <div className={"grid grid-cols-3 gap-1"}>
      <PostSquare />
      <PostSquare />
      <PostSquare />
      <PostSquare />
      <PostSquare />
      <PostSquare />
      <PostSquare />
      <PostSquare />
      <PostSquare />
      <PostSquare />
      <PostSquare />
      <PostSquare />
      <PostSquare />
    </div>
  );
};
