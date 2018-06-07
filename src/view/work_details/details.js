import React,{Component} from "react";
import axios from "axios";
import qs from "qs";
import Tab from "../../component/tab";

export default class Details extends Component {
    constructor(arg){
        super(arg);
        let username = window.sessionStorage.getItem("username");
        this.state = {
            username,
            good: parseInt(this.props.data.good),
            isGood: false,
            id: this.props.id
        }
        if(username){
            this.getGood(()=>{
                this.setState({
                    isGood: true
                });
            });
        }
    }
    getGood =(cb,cb2,cb3)=>{
        axios.post(
            "https://www.koocv.com/lecturer/getgood",
            qs.stringify({
                article_id: this.state.id
            }),{
                withCredentials:true
            }
        ).then((res)=>{
            if(res.data.code === 0){
               cb&&cb(res.data.gooid);
            } else if(res.data.code === 3) {
                cb2&&cb2();
            } else if(res.data.code === 1) {
                cb3&&cb3();
            }
        }).catch((res)=>{
            console.log(res);
        })
    }
    goodHandler=()=>{
        this.getGood((goodid)=>{
            this.goodCancel(goodid);
        },()=>{
            this.goodAdd();
        },()=>{
            alert("请先登录");
            this.props.push("../login");
        })
    }
    goodAdd=()=>{
        axios.post(
            "https://www.koocv.com/lecturer/good",
            qs.stringify({
                article_id: this.state.id
            }),{
                withCredentials:true
            }
        ).then((res)=>{
            if(res.data.code === 0){
                let {isGood,good} = this.state;
                isGood = true;
                good += 1;
                this.setState({
                    isGood,
                    good
                })
            }
        }).catch((res)=>{
            console.log(res);
        })
    }
    goodCancel=(goodid)=>{
        axios.post(
            "https://www.koocv.com/lecturer/cancelgood",
            qs.stringify({
                goodid,
                article_id: this.state.id
            }),{
                withCredentials:true
            }
        ).then((res)=>{
          if(res.data.code === 0){
            let {isGood,good} = this.state;
            isGood = false;
            good -= 1;
            this.setState({
                isGood,
                good
            })
          }
        }).catch((res)=>{
            console.log(res);
        })
    }
    componentDidMount(){
        let con = this.refs.workContent;
        let imgs = Array.from(con.querySelectorAll("img"));
        imgs.forEach((img)=>{
            img.src = "https://www.koocv.com"+img.getAttribute("src");
        });
    }
    render(){
        let data = this.props.data;
        let imgs = data.image_path?data.image_path:[];
        let {isGood,good} = this.state;
        return (<div>
            <Tab
                id="banner"
                data = {imgs}
                activeClass="active"
                renderItem={(item)=>{
                     return  <a><img src={item.path} /></a>;
                }}
            />
            <h1 className="work-title">{data.title}</h1>
            <article
                className="wrok-details"
                dangerouslySetInnerHTML={{
                    __html: data.content
                }}
                ref="workContent"
            >
            </article>
            <div className="work-aside">
                <span className="good">有{good}人觉得很赞</span>
                <span
                    className={`iconfont icon-zan ${isGood?"isGood":""}`}
                    onTouchEnd={this.goodHandler}
                ></span>
            </div>
        </div>);
    }
}