import React,{Component} from "react";
import axios from "axios";
import qs from 'qs';
export default class RegisterForm extends Component {
    constructor(arg){
        super(arg);
        this.state = {
            username: "miaov_leo",
            password: "miaov123",
            repassword: "miaov123",
            verify: "",
            verifyImg: "https://www.koocv.com/user/verify"+"?"+Date.now()
        };
        this.userNameChange = this.userNameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.repasswordChange = this.repasswordChange.bind(this);
        this.verifyChange = this.verifyChange.bind(this);
        this.toRegister = this.toRegister.bind(this);
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
    repasswordChange(e){
        this.setState({
            repassword:e.target.value
        });
    }
    verifyChange(e){
        this.setState({
            verify:e.target.value
        });
    }
    verifyCodeChange(){
        this.setState({
            verifyImg: this.state.verifyImg+"?"+Date.now()
        });
    }
    toRegister(){
        let {username,password,repassword,verify} = this.state;
        axios.post("https://www.koocv.com/user/register",qs.stringify({
            username,
            password,
            repassword,
            verify
        }),{
            withCredentials:true
        }).then((res)=>{
                if(res.data.code == 0){
                    window.sessionStorage.setItem("username",username);
                    alert("注册成功");
                    this.props.change(0);
                } else {
                    alert(res.data.msg);
                }
                this.verifyCodeChange();
            })
            .catch((res)=>{
                console.log(res);
            })
    }
    render(){
        let {username,password,repassword,verify,verifyImg} = this.state;
        return (
            <div className="login-inner register-form">
                <p className="login-info register-title">注册账号</p>
                <div className="input-txt">
                    <input type="text" value={username} placeholder="用户名" onChange={this.userNameChange}  />
                    <span className="input-txt-ico icon-youxiang1 iconfont"></span>
                </div>
                <div className="input-txt">
                    <input type="password" value={password} placeholder="设置密码" onChange={this.passwordChange} />
                    <span className="input-txt-ico icon-denglumima iconfont"></span>
                </div>
                <div className="input-txt">
                    <input type="password" value={repassword} placeholder="确认密码" onChange={this.repasswordChange} />
                    <span className="input-txt-ico icon-denglumima iconfont"></span>
                </div>
                <div className="input-verify">
                    <div className="input-txt">
                        <input type="text" placeholder="验证码" value={verify} onChange={this.verifyChange} />
                        <span className="input-txt-ico icon-denglumima iconfont"></span>
                    </div>
                    <img className="input-verify-img" src={verifyImg} onTouchEnd={this.verifyCodeChange} />
                </div>
                <a href="javascript:;" className="input-btn" onClick={this.toRegister}>马上注册</a>
                <p className="login-info">已有帐号？<a href="javascript:;" className="to-login" onClick={()=>{
                    this.props.change(0);
                }} >立即登陆</a></p>
            </div>
        );
    }
}

