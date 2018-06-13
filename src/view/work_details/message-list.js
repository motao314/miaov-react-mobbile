import React,{Component} from "react";

export default class MessageList extends Component {
    render(){
        let {data,loading,loadOver} = this.props;
        let Footer = ()=>{
            "use strict";
            if(data.length === 0){
                return "";
            }
            if(loadOver){
                return <footer className="works-more">这是底线了</footer>
            }
            if(loading){
                return <footer className="works-more"><span>正在加载更多数据了</span></footer>
            }
            return "";
        };
        return (<div className="work-message">
            {
                data.length>0?
                    (data.map((item,index)=>{
                        return (
                            <aside key={index}>
                                <div className="message-info">
                                    <span>{item.username}</span> 回复:
                                </div>
                                <div
                                    className="message-con"
                                    dangerouslySetInnerHTML={{
                                        __html: item.content
                                    }}
                                >
                                </div>
                            </aside>
                        );
            }))
                    :
                    (<p className="work-no-info">
                抢个沙发吧
            </p>)}
            {Footer()}
        </div>)
    }
}