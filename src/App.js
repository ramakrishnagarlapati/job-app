import { Route, Redirect, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import NotFound from "./pages/NotFound";
import JobDetails from "./pages/JobDetails";
import Bookmarks from "./pages/Bookmarks";

import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/jobs" component={Jobs} />
    <Route exact path="/jobs/:id" component={JobDetails} />
    <Route exact path="/bookmarks" component={Bookmarks} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
);

export default App;
