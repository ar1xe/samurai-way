import React, { FC } from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { PostDataContentPropsType, PostDataPropsType } from "../../App";
import { addPost } from "../../redux/state";

type ProfilePropsType = {
  stateProfile: PostDataContentPropsType;
  addPost: () => void;
  updateNewPostText: (newText: string) => void;
};

export const Profile: FC<ProfilePropsType> = ({
  stateProfile,
  addPost,
  updateNewPostText,
}) => {
  return (
    <div>
      <ProfileInfo description="description" />
      <MyPosts
        postsData={stateProfile}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </div>
  );
};
