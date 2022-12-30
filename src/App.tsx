import React, { FC } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import { SuperButton } from "./components/SuperButton";
import { SuperTodoList } from "./components/SuperTodoList";
import { addPost, updateNewPostText } from "./redux/state";

export type AppPropsType = {
  state: StatePropsType;
  addPost?: () => void;
  updateNewPostText?: (newText: string) => void;
};

export type StatePropsType = {
  messagePage: MessagesAndDialogsContentPropsType;
  profilePage: PostDataContentPropsType;
  navBar: SideBarContentPropsType;
};

export type MessagesAndDialogsContentPropsType = {
  messages: MessagesPropsType[];
  dialogs: DialogsPropsType[];
};

export type PostDataContentPropsType = {
  postsData: PostDataPropsType[];
  newPostText: string;
};

export type SideBarContentPropsType = {
  navigate: NavigatePropsType[];
  friendsList: FriendsListPropsType[];
};

export type PostDataPropsType = {
  id: number;
  message: string;
  likesCount: number;
};

export type DialogsPropsType = {
  id: number;
  name: string;
};

export type MessagesPropsType = {
  id: number;
  message: string;
};

export type NavigatePropsType = {
  id: number;
  path: string;
  title: string;
};

export type FriendsListPropsType = {
  id: number;
  name: string;
  img: string;
};

const App: FC<AppPropsType> = ({ state }) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar stateNavbar={state.navBar} />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => <Dialogs stateDialogs={state.messagePage} />}
          />

          <Route
            path="/profile"
            render={() => (
              <Profile
                stateProfile={state.profilePage}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
              />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
