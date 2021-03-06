import React, { useState, useReducer, useEffect, Suspense } from "react";
import { useImmerReducer } from "use-immer";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import Terms from "./components/Terms";
import Home from "./components/Home";
const CreatePost = React.lazy(() => import("./components/CreatePost"));
import Axios from "axios";
const ViewSinglePost = React.lazy(() => import("./components/ViewSinglePost"));
import FlashMessages from "./components/FlashMessages";
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";
import Profile from "./components/Profile";
import EditPost from "./components/EditPost";
import NotFound from "./components/NotFound";
import { CSSTransition } from "react-transition-group";
const Search = React.lazy(() => import("./components/Search"));
const Chat = React.lazy(() => import("./components/Chat"));
import LoadingDotsIcon from "./components/LoadingDotsIcon";

Axios.defaults.baseURL =
  process.env.BACKENDURL || "https://martonbackendforreactapp.herokuapp.com";

const initialState = {
  loggedIn: Boolean(localStorage.getItem("complexappToken")),
  flashMessages: [],
  user: {
    username: localStorage.getItem("complexappUsername"),
    token: localStorage.getItem("complexappToken"),
    avatar: localStorage.getItem("complexappAvatar"),
  },
  isSearchOpen: false,
  isChatOpen: false,
  unreadChatCount: 0,
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
    case "toggleChat":
      draft.isChatOpen = !draft.isChatOpen;
      return;
    case "closeChat":
      draft.isChatOpen = false;
      return;
    case "incrementUnreadChatCount":
      draft.unreadChatCount++;
      return;
    case "clearUnreadChatCount":
      draft.unreadChatCount = 0;
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

  useEffect(() => {
    if (state.loggedIn) {
      const ourRequest = Axios.CancelToken.source();

      async function fetchResults() {
        try {
          const response = await Axios.post(
            "/checkToken",
            { token: state.user.token },
            { cancelToken: ourRequest.token }
          );

          if (!response.data) {
            dispatch({ type: "logout" });
            dispatch({
              type: "flashMessages",
              value: "Your session token has expired. Please log in again.",
            });
          }
        } catch (ex) {
          console.log("There was something wrong or the request is cancelled");
        }
      }
      fetchResults();
      return () => ourRequest.cancel();
    }
  }, []);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <FlashMessages messages={state.flashMessages} />
          <Header />
          <Suspense fallback={<LoadingDotsIcon />}>
            <Switch>
              <Route path="/profile/:username" component={Profile} />
              <Route
                path="/"
                exact
                component={state.loggedIn ? Home : HomeGuest}
              />
              <Route
                path="/create-post"
                render={(props) => <CreatePost {...props} />}
              />
              <Route path="/post/:id" exact component={ViewSinglePost} />
              <Route path="/post/:id/edit" exact component={EditPost} />
              <Route path="/about-us" component={About} />
              <Route path="/terms" component={Terms} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
          <CSSTransition
            timeout={330}
            in={state.isSearchOpen}
            classNames="search-overlay"
            unmountOnExit
          >
            <div className="search-overlay">
              <Suspense fallback="">
                <Search />
              </Suspense>
            </div>
          </CSSTransition>
          <Suspense fallback="">{state.loggedIn && <Chat />}</Suspense>
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
