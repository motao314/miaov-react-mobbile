import React,{Component} from "react";
import MenuPage from "../../component/menuPage";
import {Link} from "react-router-dom";
require('../../css/work_details.css');

export default class WorkDetails extends Component {
    constructor(arg){
        super(arg);
        this.state = {
            isLoadIng: true,
            data:[]
        }
    }
    render(){
        console.log(this.props);
        return (<div>
            <MenuPage>
                <div id="banner">
                    <ul className="picList">
                        <li>
                            <a href="#">
                                <img src={require("../../img/banner/img.png")} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={require("../../img/banner/img2.png")} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={require("../../img/banner/img3.png")} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={require("../../img/banner/img4.png")} />
                            </a>
                        </li>
                    </ul>
                    <nav className="nav">
                        <a href="javascript:;" className="active"></a>
                        <a href="javascript:;"></a>
                        <a href="javascript:;"></a>
                        <a href="javascript:;"></a>
                    </nav>
                </div>
                <h1 className="work-title">学员作品：90后的童年记忆 - 皮卡丘之《z 酷噜镇》</h1>
                <article className="wrok-details">

                </article>
                <div className="work-aside">
                    <span className="good">有0人觉得很赞</span>
                    <span className="iconfont icon-zan"></span>
                </div>
                <div className="work-message">
                    <aside>
                        <div className="message-info">
                            <span>Leo</span> 回复:
                        </div>
                        <div className="message-con">
                            <p>嘿嘿！来看看我第一个项目的评论</p>
                            <p>暂时还没有评论哦～抢个沙发吧！</p>
                        </div>
                    </aside>
                    <aside>
                        <div className="message-info">
                            <span>Leo</span> 回复:
                        </div>
                        <div className="message-con">
                            <p>嘿嘿！来看看我第一个项目的评论</p>
                            <p>暂时还没有评论哦～抢个沙发吧！</p>
                        </div>
                    </aside>
                    <aside>
                        <div className="message-info">
                            <span>Leo</span> 回复:
                        </div>
                        <div className="message-con">
                            <p>嘿嘿！来看看我第一个项目的评论</p>
                            <p>暂时还没有评论哦～抢个沙发吧！</p>
                            <p>暂时还没有评论哦～抢个沙发吧！</p>
                        </div>
                    </aside>
                </div>
            </MenuPage>
            <div className="post-message">
                <Link to="/workmessage/:id"  id="message-btn" className="iconfont icon-tubiao-">回复本帖</Link>
            </div>
        </div>
        );
    }
}
