import React, { Component } from 'react';
import {Switch,Route,Redirect} from "react-router-dom";
import Index from "./view/index/index";
import Course from "./view/course/index";
import Login from "./view/login/index";
import Lecturer from "./view/lecturer/index";
import WorkDetails from "./view/work_details/index";
import WorkMessage from "./view/work_message/index";
require("./css/style.css");
class App extends Component {
    componentDidUpdate(){
        setTimeout(function(){
            window.scrollTo(0,0);
        });
    }
    render() {
        return (
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/course" component={Course} />
            <Route path="/login"  render={()=>{
                let username = window.sessionStorage.getItem("username");
                console.log(username);
                if(username){
                    return <Redirect to="/" />
                } else {
                    return <Login />;
                }
            }} />
            <Route path="/lecturer" component={Lecturer} />
            <Route path="/workdetails/:id" component={WorkDetails} />
            <Route path="/workmessage/:id" component={WorkMessage} />
          </Switch>
        );
}
}

export default App;
