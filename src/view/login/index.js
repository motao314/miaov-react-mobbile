import React,{Component} from "react";
import Header from "../../component/header";
import LoginForm from "./loginform";
import RegisterForm from "./registerform";
require('../../css/login.css');

export default class Login extends Component {
    constructor(arg){
        super(arg);
        this.state = {
            deg: 0
        }
        this.changeDeg = this.changeDeg.bind(this);
    }
    changeDeg(deg){
        console.log(this);
        this.setState({
            deg
        });
    }
    render(){
        return (
            <div id="page" className="login-page">
                <Header isBack={true}/>
                <h2 id="login-title">
                    <img src={require("../../img/loginTitle.png")} />
                </h2>
                <div className="login-wrap">
                    <div className="login-3d" style={{
                        transform:`rotateY(${this.state.deg}deg)`
                    }}>
                        <LoginForm change={this.changeDeg}  />
                        <RegisterForm change={this.changeDeg} />
                    </div>
                </div>
            </div>
        );
    }
}

