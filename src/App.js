import React, { Component } from 'react';
import {Switch,Route,Redirect} from "react-router-dom";
import Index from "./view/index/index";
import Course from "./view/course/index";
import Login from "./view/login/index";
import Lecturer from "./view/lecturer/index";
import WorkDetails from "./view/work_details/index";
import WorkMessage from "./view/work_message/index";
import axios from "axios";
require("./css/style.css");
class App extends Component {
    constructor(arg){
        super(arg);
        this.state = {
            username:"",
        }
        this.getUser();
    }
    getUser=()=>{
        axios.post(
            "https://www.koocv.com//user/islogin",
            "",
            {
                withCredentials:true
            }
        ).then((res)=>{
           if(res.code === 0){
               window.sessionStorage.setItem("username",res.username);
           } else if(res.code === 1) {
               window.sessionStorage.removeItem("username");
           }
        }).catch((res)=>{
            console.log(res);
        })
    }
    componentDidUpdate(){
        this.getUser();
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
                if(username){
                    return <Redirect to="/" />
                } else {
                    return <Login />;
                }
            }} />
            <Route path="/lecturer" component={Lecturer} />
            <Route path="/workdetails/:id" component={WorkDetails} />
            <Route path="/workmessage/:id" render={(props)=>{
                let username = window.sessionStorage.getItem("username");
                if(!username){
                    return <Redirect to="/login" />
                } else {
                    return <WorkMessage {...props} />;
                }
            }
            } />
          </Switch>
        );
}
}

export default App;
