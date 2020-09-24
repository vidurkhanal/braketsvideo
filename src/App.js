import React from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Result from "./Result";
import { useState } from "react";
import requests from "./requests";
import Footer from "./Footer";
import Player from "./Player";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import ErrorPage from "./ErrorPage";

function App() {
  // movieCategory will be request URL for each category.
  const [movieCategory, setMovieCategory] = useState(requests.fetchTrending);
  const [{ selectedMovie }, dispatch] = useStateValue();
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/play">
            {selectedMovie ? (
              <Player />
            ) : (
              <ErrorPage title="ACCESS DENIED:CODE_401" />
            )}
          </Route>
          <Route exact path="/">
            <Header />
            <Nav setMovieCategory={setMovieCategory} />
            <Result movieCategory={movieCategory} />
            <Footer />
          </Route>
          <Route>
            <ErrorPage title="PAGE DOESN'T EXISTS:CODE_404" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
