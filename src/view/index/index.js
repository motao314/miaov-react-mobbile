import React,{Component} from "react";
import Header from "../../component/header";
import Menu from "../../component/menu";
import Tab from "../../component/tab";
import Miaov from "./miaov";
import axios from "axios";
import qs from 'qs';
import Curriculum from "./curriculum";
import RegisterVip from "./register-vip";
import Wroks from "./wroks";
import Scroll from "../../component/scroll";
require('../../css/index.css');
let tabImgs = [
    require("../../img/banner/img.png"),
    require("../../img/banner/img2.png"),
    require("../../img/banner/img3.png"),
    require("../../img/banner/img4.png")
];
export default class Index extends Component {
    constructor(arg){
        super(arg);
        this.state = {
            page: 1,
            rows: 2,
            listdata: [],
            isLoad: false,
            lowerScroll: 0,
            isLoadIng: true,
            loadInfo: "正在加载更多内容"
        };
        this.loadMore = this.loadMore.bind(this);
    }
    loadMore(){
        let {listdata,page,rows} = this.state;
        this.setState({
            isLoad: true
        });
        axios.post(
            `https://www.koocv.com/lecturer/lists?page=${page}&rows=${rows}`,
            qs.stringify({
                order:"desc",
                sort:"id",
                category_id:1,
                recommend:1
            })
        ).then((res)=>{
            if(res.data.length) {
                listdata = listdata.concat(res.data)
                this.setState({
                    page: page + 1,
                    isLoad: false,
                    listdata
                });
            } else {
                this.setState({
                    loadInfo:"没有更多信息了",
                    isLoadIng: false
                });
            }
        }).catch((res)=>{
            console.log(res.data);
        });
    }
    componentDidMount(){
        let that = this;
        this.loadMore();
        window.addEventListener("scroll",function(){
            if(!that.state.isLoadIng){
                return ;
            }
            let scrollDis = document.documentElement.offsetHeight - window.scrollY - document.documentElement.clientHeight;
            if(scrollDis <= that.state.lowerScroll){
                that.loadMore();
            }
        })
    }
    render(){
        let loadMore = <footer className="works-more"><span>{this.state.loadInfo}</span></footer>;
        return (
            <div>
                <Menu />
                <div id="page" className="index-page">
                    <Scroll>
                        <Header isMenu={true} />
                        <Tab
                            id="banner"
                            activeClass = "active"
                            data={tabImgs}
                            renderItem={(item)=>{
                                return (<a href="#">
                                    <img src={item} />
                                </a>)
                            }}
                        />
                        <Curriculum />
                        <RegisterVip />
                        <Miaov />
                        <Wroks data={this.state.listdata} />
                        {this.state.isLoad?loadMore:""}
                    </Scroll>
                </div>
            </div>
        );
    }
}
