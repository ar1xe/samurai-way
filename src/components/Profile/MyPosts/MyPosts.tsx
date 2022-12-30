import React, { FC, MutableRefObject, useRef } from "react";
import styles from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { PostDataContentPropsType, PostDataPropsType } from "../../../App";
import state from "../../../redux/state";

type MyPostsPropsType = {
  postsData: PostDataContentPropsType;
  addPost: () => void;
  updateNewPostText: (newText: string) => void;
};

export const MyPosts: FC<MyPostsPropsType> = ({
  postsData,
  addPost,
  updateNewPostText,
}) => {
  const postsMapped = postsData.postsData.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  const newPostElement = useRef<HTMLTextAreaElement>(
    null
  ) as MutableRefObject<HTMLTextAreaElement>;

  const addNewPost = () => {
    addPost();
    // newPostElement.current.value = "";
    // updateNewPostText("");
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    updateNewPostText(text);
  };

  return (
    <div className={styles.posts_wrapper}>
      <h3>My posts</h3>
      <div>
        <h5>New post</h5>
        <div>
          <textarea
            ref={newPostElement}
            value={postsData.newPostText}
            onChange={onPostChange}
          />
        </div>
        <div>
          <button onClick={addNewPost}>Add post</button>
        </div>
        <div>{postsMapped}</div>
      </div>
    </div>
  );
};
