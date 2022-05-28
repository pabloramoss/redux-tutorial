import {nanoid} from "@reduxjs/toolkit";
import {useState} from "react";

import {useAppDispatch} from "../hooks/hooks";
import {postAdded} from "../redux/features/postsSlice";

const AddPostForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      postAdded({
        id: nanoid(),
        title,
        content,
      }),
    );
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h1>Add New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Title</h2>
          <input
            placeholder="Title"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          />
          <h2>Content</h2>
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
          />
        </div>
        <button>Add post</button>
      </form>
    </div>
  );
};

export default AddPostForm;
