import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
// demo pages
import ArrayDemo from "./pages/ArrayDemo";
import QueryReducerDemo from "./pages/QueryReducer/QueryReducer";

export default function App() {
  return (
    <div className="page-wrapper">
      <Router>
        <Header />
        <Route path="/"  component={QueryReducerDemo} exact />
        <Route path="/array-demo" component={ArrayDemo} />
      </Router>
    </div>
  );
}
