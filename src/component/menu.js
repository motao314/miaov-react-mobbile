import React,{Component} from "react";
import {NavLink} from "react-router-dom";
export default class Menu extends Component {
    render(){
        return (
            <nav id="nav">
                <NavLink to="/" className="iconfont icon-home">首页</NavLink>
                <NavLink to="/course" className="iconfont icon-kecheng">课程安排</NavLink>
                <NavLink to="/lecturer" className="iconfont icon-peixunjiangshi">讲师团队</NavLink>
            </nav>
        );
    }
}