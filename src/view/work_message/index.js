import React,{Component} from "react";
import Header from "../../component/header";
import axios from "axios";
import qs from "qs";
require('../../css/message.css');

export default class WorkMessage extends Component {
    constructor(arg){
        super(arg);

        this.state = {
            id: this.props.match.params.id,
            message: ""
        }
    }
    messageHandler=(e)=>{
        this.setState({
            message: e.target.value
        })
    }
    postMessage=()=>{
        let {id,message} = this.state;
        if(!message.trim()){
            alert("请输入内容");
            return ;
        }
        axios.post(
            "/yanzheng/lecturer/addcomment",
            qs.stringify({
                article_id:id,
                content: message
            }),{
               withCredentials: true
        }).then((res)=>{
            if(res.data.code == 0){
                alert("评论成功");
                this.props.history.goBack();
            }
        }).catch((res)=>{
            console.log(res);
        })
    }
    render(){
        return (
            <div id="page" className="messapge-page">
                <Header isBack={true}/>
                <textarea
                    className="message-txt"
                    onChange={this.messageHandler}
                    value={this.state.message}
                />
                <a
                    className="btn"
                    onTouchEnd={this.postMessage}
                >
                    提交留言
                </a>
            </div>
        );
    }
}
