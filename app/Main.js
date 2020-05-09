import React, { useState, useReducer, useEffect } from "react";
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
import Profile from "./components/Profile";
import EditPost from "./components/EditPost";
import NotFound from "./components/NotFound";
import Search from "./components/Search";
import { CSSTransition } from "react-transition-group";

Axios.defaults.baseURL = "http://localhost:8080";

const initialState = {
  loggedIn: Boolean(localStorage.getItem("complexappToken")),
  flashMessages: [],
  user: {
    username: localStorage.getItem("complexappUsername"),
    token: localStorage.getItem("complexappToken"),
    avatar: localStorage.getItem("complexappAvatar")
  },
  isSearchOpen: false
};
const ourReducer = (draft, action) => {
  switch (action.type) {
    case "login":
      draft.loggedIn = true;
      draft.user = action.data;
      return;
    case "logout":
      draft.loggedIn = false;
      return;
    case "flashMessages":
      draft.flashMessages.push(action.value);
      return;
    case "openSearch":
      draft.isSearchOpen = true;
      return;
    case "closeSearch":
      draft.isSearchOpen = false;
      return;
  }
};

function Main() {
  const [state, dispatch] = useImmerReducer(ourReducer, initialState);
  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem("complexappToken", state.user.token);
      localStorage.setItem("complexappUsername", state.user.username);
      localStorage.setItem("complexappAvatar", state.user.avatar);
    } else {
      localStorage.removeItem("complexappToken");
      localStorage.removeItem("complexappUsername");
      localStorage.removeItem("complexappAvatar");
    }
  }, [state.loggedIn]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <FlashMessages messages={state.flashMessages} />
          <Header />

          <Switch>
            <Route path="/profile/:username" component={Profile} />
            <Route path="/" exact component={state.loggedIn ? Home : HomeGuest} />
            <Route path="/create-post" render={props => <CreatePost {...props} />} />
            <Route path="/post/:id" exact component={ViewSinglePost} />
            <Route path="/post/:id/edit" exact component={EditPost} />
            <Route path="/about-us" component={About} />
            <Route path="/terms" component={Terms} />
            <Route component={NotFound} />
          </Switch>
          <CSSTransition timeout={330} in={state.isSearchOpen} classNames="search-overlay" unmountOnExit>
            <Search />
          </CSSTransition>
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
