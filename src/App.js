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
            "/yanzheng/user/islogin",
            "",
            {
                withCredentials:true
            }
        ).then((res)=>{
            console.log(res.data);
           if(res.data.code === 0){
               window.sessionStorage.setItem("user",res.data.username);
           } else if(res.data.code === 1) {
               window.sessionStorage.removeItem("user");
           }
        }).catch((res)=>{
            console.log(res);
        })
    }
    componentDidUpdate(){
        let _this = this;
        setTimeout(function(){
            _this.getUser();
            window.scrollTo(0,0);
        });
    }
    render() {
        return (
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/course" component={Course} />
            <Route path="/login"  render={()=>{
                let username = window.sessionStorage.getItem("user");
                if(username){
                    return <Redirect to="/" />
                } else {
                    return <Login />;
                }
            }} />
            <Route path="/lecturer" component={Lecturer} />
            <Route path="/workdetails/:id" component={WorkDetails} />
            <Route path="/workmessage/:id" render={(props)=>{
                let username = window.sessionStorage.getItem("user");
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
