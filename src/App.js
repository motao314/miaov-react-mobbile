import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom";
import Index from "./view/index/index";
import Course from "./view/course/index";
import Login from "./view/login/index";
import Lecturer from "./view/lecturer/index";
import WorkDetails from "./view/work_details/index";
import WorkMessage from "./view/work_message/index";
require("./css/style.css");
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/course" component={Course} />
        <Route path="/login" component={Login} />
        <Route path="/lecturer" component={Lecturer} />
        <Route path="/workdetails/:id" component={WorkDetails} />
        <Route path="/workmessage" component={WorkMessage} />
      </Switch>
    );
  }
}

export default App;
