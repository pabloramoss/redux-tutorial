import {IPost} from "../../types";

interface PostProps {
  post: IPost;
}

const PostCard: React.FC<PostProps> = ({post}) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default PostCard;
