import React,{Component} from "react";
export default class Tab extends Component {
    constructor(arg){
        super(arg);
        this.state = {
            active: 0
        }
    }
    render(){
        let {data,renderItem,activeClass} = this.props;
        return (
            <div id={this.props.id} className="tab">
                <ul className="picList">
                    {data.map((item,index)=>{
                        return (<li key={index}>
                            {renderItem(item)};
                        </li>);
                    })}
                </ul>
                <nav className="nav">
                    {data.map((item,index)=>{
                        return  this.state.active == index?<a key={index} className={activeClass}></a>:<a key={index}></a>
                    })}
                </nav>
            </div>
        );
    }
}