import React,{Component} from "react";
import {Link} from "react-router-dom";
export default class Header extends Component {
    render(){
        let usename = window.sessionStorage.getItem("username");
        return (
            <header id="header">
                <h1 id="logo">
                    <img src={require("../img/logo.png")} />
                </h1>
                {this.props.isBack?(<a
                        href="javascript:;"
                        className="iconfont icon-back"
                        id="backBtn"
                        onTouchEnd={()=>{
                            window.history.back();
                        }}
                ></a>):""}
                {this.props.isMenu? <a
                    className="iconfont icon-hycaidan"
                    id="menuBtn"
                    onTouchEnd={(e)=>{
                        this.props.openMenu();
                        e.stopPropagation();
                    }}
                ></a>:""}
                {usename?<span id="loginTxt">{usename}</span>:<Link to="/login" className="iconfont icon-denglu" id="loginBtn"></Link>}
            </header>
        );
    }
}