// import { renderEntireTree } from "../index";

import { StatePropsType } from "../App";

let renderEntireTree = (state: StatePropsType) => {
  console.log("state was change");
};
let state = {
  messagePage: {
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "What are you doing?" },
      { id: 4, message: "What time is it?" },
      { id: 5, message: "Where are you from?" },
    ],
    dialogs: [
      { id: 1, name: "Sasha" },
      { id: 2, name: "Dima" },
      { id: 3, name: "Ira" },
      { id: 4, name: "Roma" },
      { id: 5, name: "Kristina" },
    ],
  },
  profilePage: {
    postsData: [
      { id: 1, message: "First post", likesCount: 12 },
      { id: 2, message: "Hello!", likesCount: 4 },
      { id: 3, message: "WA?", likesCount: 10 },
      { id: 4, message: "How are you?", likesCount: 4 },
    ],
    newPostText: "it lama",
  },
  navBar: {
    navigate: [
      { id: 1, path: "/profile", title: "Profile" },
      { id: 2, path: "/dialogs", title: "Messages" },
      { id: 3, path: "/123", title: "News" },
      { id: 4, path: "/132", title: "Music" },
      { id: 5, path: "/321", title: "Settings" },
    ],
    friendsList: [
      {
        id: 1,
        name: "Dimon",
        img: "https://www.meme-arsenal.com/memes/c77056a35ff27cc3bcec86e03a999fc1.jpg",
      },
      {
        id: 2,
        name: "EfiN",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/%D0%95%D1%84%D0%B8%D0%BC_%D0%A8%D0%B8%D1%84%D1%80%D0%B8%D0%BD_2010.jpg/250px-%D0%95%D1%84%D0%B8%D0%BC_%D0%A8%D0%B8%D1%84%D1%80%D0%B8%D0%BD_2010.jpg",
      },
      {
        id: 3,
        name: "Borya",
        img: "https://damion.club/uploads/posts/2022-09/1664188838_3-damion-club-p-boris-britva-akter-pinterest-10.jpg",
      },
      {
        id: 4,
        name: "JK",
        img: "https://i.ytimg.com/vi/nZ3BSjI26y8/maxresdefault.jpg",
      },
    ],
  },
};

export const addPost = () => {
  const newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  renderEntireTree(state);
};

export const updateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};

export const subscribe = (obserwer: any) => {
  renderEntireTree = obserwer;
};

export default state;
