import {useAppSelector} from "../hooks/hooks";
import {IPost} from "../../types";

import PostCard from "./PostCard";

const PostsList: React.FC = () => {
  const postsList: IPost[] = useAppSelector((state) => state.posts);

  return (
    <div>
      {postsList.map((post: IPost) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
