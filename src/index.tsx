import React from "react";
import "./index.css";
import state, { subscribe } from "./redux/state";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App, { StatePropsType } from "./App";
import { addPost, updateNewPostText } from "./redux/state";

export const renderEntireTree = (state: StatePropsType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderEntireTree(state);
subscribe(renderEntireTree);
