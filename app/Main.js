import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import Terms from "./components/Terms";

function Main() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact component={HomeGuest} />
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
