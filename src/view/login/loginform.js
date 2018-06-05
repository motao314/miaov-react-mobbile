import React,{Component} from "react";
import axios from "axios";
import qs from 'qs';
export default class LoginForm extends Component {
    constructor(arg){
        super(arg);
        this.state = {
            username: "miaov",
            password: "miaov123",
            verify: "",
            record: true,
            verifyImg: "https://www.koocv.com/user/verify"+"?"+Date.now()
        };
        this.userNameChange = this.userNameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.verifyChange = this.verifyChange.bind(this);
        this.recordChange = this.recordChange.bind(this);
        this.toLogin = this.toLogin.bind(this);
        this.verifyCodeChange = this.verifyCodeChange.bind(this);
    }
    userNameChange(e){
        this.setState({
            username:e.target.value
        });
    }
    passwordChange(e){
        this.setState({
            password:e.target.value
        });
    }
    verifyCodeChange(){
        this.setState({
            verifyImg: this.state.verifyImg+"?"+Date.now()
        });
    }
    verifyChange(e){
        this.setState({
            verify:e.target.value
        });
    }
    recordChange(e){
        this.setState({
            record:e.target.checked
        });
    }
    toLogin(){
        let {username,password,verify} = this.state;
        axios.post("https://www.koocv.com/user/login",qs.stringify({
            username,
            password,
            verify
        }),{
            withCredentials:true
        }).then((res)=>{
            console.log(res.data);
            this.verifyCodeChange();
        }).catch((res)=>{
                console.log(res);
                this.verifyCodeChange();
            })
    }
    render(){
        return (
            <div className="login-inner login-form">
                <div className="login-ico iconfont icon-dengluming"></div>
                <p className="login-info">如有账号，请直接登录</p>
                <div className="input-txt">
                    <input type="text" placeholder="用户名" value={this.state.username} onChange={this.userNameChange} />
                    <span className="input-txt-ico icon-youxiang1 iconfont"></span>
                </div>
                <div className="input-txt">
                    <input type="password" placeholder="密码" onChange={this.passwordChange} value={this.state.password} />
                    <span className="input-txt-ico icon-denglumima iconfont"></span>
                </div>
                <div className="input-verify">
                    <div className="input-txt">
                        <input type="text" placeholder="验证码" onChange={this.verifyChange} />
                        <span className="input-txt-ico icon-denglumima iconfont"></span>
                    </div>
                    <img className="input-verify-img" src={this.state.verifyImg} onTouchEnd={this.verifyCodeChange} />
                </div>
                <div className="input-record">
                    <input type="checkbox" id="record" checked={this.state.record} onChange={this.recordChange} />
                    <label htmlFor="record">记住密码</label>
                </div>
                <a href="javascript:;" className="input-btn" onClick={this.toLogin}>登陆</a>
                <p className="login-info">没有帐号？<a href="javascript:;" className="to-register" onClick={()=>{
                    this.props.change(180);
                }}>立即注册</a></p>
            </div>
        );
    }
}

