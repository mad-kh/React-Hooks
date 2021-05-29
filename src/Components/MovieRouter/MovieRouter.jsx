import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieContainer from "../MovieContainer/MovieContainer";
import Description from "../Description/Description";
const MovieRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MovieContainer} />
        <Route exact path="/Description/:id" component={Description} />
      </Switch>
    </Router>
  );
};

export default MovieRouter;
