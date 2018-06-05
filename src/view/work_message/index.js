import React,{Component} from "react";
import Header from "../../component/header";
require('../../css/message.css');

export default class WorkMessage extends Component {
    render(){
        return (
            <div id="page" className="messapge-page">
                <Header isBack={true}/>
                <textarea className="message-txt"></textarea>
                <a href="javascript:;" className="btn">提交留言</a>
            </div>
        );
    }
}
