import React,{Component} from "react";
import MenuPage from "../../component/menuPage";
import {Link} from "react-router-dom";
import LoadAnimate from "../../component/load";
import Details from "./details";
import qs from "qs";
import axios from "axios";
import MessageList from "./message-list";
import Scroll from "../../component/scroll";
require('../../css/work_details.css');

export default class WorkDetails extends Component {
    constructor(arg){
        super(arg);
        this.state = {
            id: this.props.match.params.id,
            isLoading: true,
            data:[]
        }
        this.getWrokData(this.state.id);
    }
    getWrokData=(id)=>{
        axios.post(
            "https://www.koocv.com/lecturer/info",
            qs.stringify({
                article_id: id
            })
        ).then((res)=>{
            if(!res.data.title){
                alert("文章不存在");
            } else {
                this.setState({
                    data:res.data,
                    isLoading: false
                });
            }

        }).catch((res)=>{
            console.log(res.data);
        });
    }
    render(){
        let {isLoading,id} = this.state;
        let inner = ()=>{
            if(isLoading){
               return <LoadAnimate />;
            } else {
                return (<div>
                    <MenuPage className="work-page">
                        <Scroll
                            render={MessageList}
                            api = "getcomment"
                            getData = {(props)=>{
                                return {
                                    article_id: id
                                }
                            }}
                        >
                            <Details
                                data={this.state.data}
                                id={this.state.id}
                                push = {this.props.history.push}
                            />
                        </Scroll>
                    </MenuPage>
                    <div className="post-message">
                        <Link to={"/workmessage/"+id}  id="message-btn" className="iconfont icon-tubiao-">回复本帖</Link>
                    </div>
                </div>);
            }
        }
        return inner();
    }
}
