import React, { useState } from "react";
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

Axios.defaults.baseURL = "http://localhost:8080";

function Main() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("complexappToken")));
  const [flashMessages, setFlashMessages] = useState([]);

  function addFlashMessage(msg) {
    setFlashMessages(prev => prev.concat(msg));
  }

  return (
    <BrowserRouter>
      <FlashMessages messages={flashMessages} />
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

      <Switch>
        <Route path="/" exact component={loggedIn ? Home : HomeGuest} />
        <Route path="/create-post" render={props => <CreatePost addFlashMessage={addFlashMessage} {...props} />} />
        <Route path="/post/:id" component={ViewSinglePost} />
        <Route path="/about-us" component={About} />
        <Route path="/terms" component={Terms} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.render(<Main />, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept();
}
