import React,{Component} from "react";

export default class MessageList extends Component {
    render(){
        let {data} = this.props;
        return "";
        return (<div className="work-message">
            {
                data.length>0?
                    (data.map((item)=>{
                        return (
                            <aside key={item}>
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
        </div>)
    }
}