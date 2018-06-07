import React,{Component} from "react";
export default class popup extends Component {
    render(){
        let {hide,data}=this.props;
        console.log(data);
        return (
            <div
                className="popup"
                onTouchStart={(e)=>{
                    e.preventDefault();
                }}
                onTouchEnd={hide}
            >
                <div
                    className="popup-win"
                    onTouchEnd={(e)=>{
                        e.stopPropagation();
                    }}
                >
                    <div
                        className="popup-photo"
                        style={{
                            backgroundImage: `url(${data.icon})`
                        }}
                    >
                    </div>
                    <h3 className="popup-title">{data.title}</h3>
                    <div className="popup-con"
                         dangerouslySetInnerHTML={{
                             __html:data.content
                         }}
                    >
                    </div>
                    <a
                        className="close"
                        onTouchEnd={hide}
                    >
                    </a>
                </div>
            </div>
        );
    }
}