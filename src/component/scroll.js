import React,{Component} from "react";
export default class Scroll extends Component {
    constructor(arg){
        super(arg);
        this.state = {
        };
        console.log(this);
    }
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
