import React,{Component} from "react";
import {Link} from "react-router-dom";
export default class Header extends Component {
    render(){
        return (
            <header id="header">
                <h1 id="logo">
                    <img src={require("../img/logo.png")} />
                </h1>
                {this.props.isBack?<a href="javascript:;" className="iconfont icon-back" id="backBtn"></a>:""}
                {this.props.isMenu? <a href="javascript:;" className="iconfont icon-hycaidan" id="menuBtn"></a>:""}
                <Link to="/login" className="iconfont icon-denglu" id="loginBtn"></Link>
            </header>
        );
    }
}