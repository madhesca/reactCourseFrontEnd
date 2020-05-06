import React, { useState, useReducer } from "react";
import { useImmerReducer } from "use-immer";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import Terms from "./components/Terms";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Axios from "axios";
import ViewSinglePost from "./components/ViewSinglePost";
import FlashMessages from "./components/FlashMessages";
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

Axios.defaults.baseURL = "http://localhost:8080";

const initialState = {
  loggedIn: Boolean(localStorage.getItem("complexappToken")),
  flashMessages: [],
};
const ourReducer = (draft, action) => {
  switch (action.type) {
    case "login":
      draft.loggedIn = true;
      return;
    case "logout":
      draft.loggedIn = false;
      return;
    case "flashMessages":
      draft.flashMessages.push(action.value);
      return;
  }
};

function Main() {
  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <FlashMessages messages={state.flashMessages} />
          <Header />

          <Switch>
            <Route
              path="/"
              exact
              component={state.loggedIn ? Home : HomeGuest}
            />
            <Route
              path="/create-post"
              render={(props) => <CreatePost {...props} />}
            />
            <Route path="/post/:id" component={ViewSinglePost} />
            <Route path="/about-us" component={About} />
            <Route path="/terms" component={Terms} />
          </Switch>

          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

ReactDOM.render(<Main />, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept();
}
