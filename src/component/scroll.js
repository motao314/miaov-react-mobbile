import React,{Component} from "react";
import axios from "axios";
import qs from 'qs';
import BScroll from "better-scroll";
export default class Scroll extends Component {
    constructor(arg){
        super(arg);
        let {lowerScroll} = this.props;
        lowerScroll = lowerScroll?lowerScroll:200;
        this.state = {
            page: 1,
            rows: 10,
            listdata: [],
            isloadOver: false,
            isLoad: false,
            lowerScroll
        };
        this.loadMore = this.loadMore.bind(this);
    }
    componentDidMount(){
        let that = this;
        this.loadMore();
        let Wrap = this.refs.wrap;
        let a = Wrap.querySelectorAll("a");
        a.forEach((item)=>{
            item.addEventListener("touchstart",function (e) {
                this.Point = {
                    x: e.changedTouches[0].pageX,
                    y: e.changedTouches[0].pageY
                };
                this.classList.add("a-active");
            })
            item.addEventListener("touchend",function (e) {
                let nowPoint = {
                    x: e.changedTouches[0].pageX,
                    y: e.changedTouches[0].pageY
                }
                if(Math.abs(nowPoint.x - this.Point.x)+Math.abs(nowPoint.y - this.Point.y) < 1){
                    if(this.href.substr(0,4) === "http"){
                        window.open(this.href,"_blank");
                    } else if(this.href.trim() != "") {
                        window.location.href = this.href;
                    }
                }
                this.classList.remove("a-active");
            })
        })
        this.scroll = new BScroll(Wrap,{
            probeType: 3
        });
        this.scroll.on("scroll",(pos)=>{
            this.toScroll(pos.y);
        })
    }
    toScroll=(y)=>{
        if(this.state.isloadOver){
            return ;
        }
        let content = this.refs.content;
        let scrollDis = content.offsetHeight - Math.abs(y) - document.documentElement.clientHeight;
        if(scrollDis <= this.state.lowerScroll){
            this.loadMore();
        }
    }
    loadMore(){
        let {listdata,page,rows,isLoad,isloadOver} = this.state;
        if(isLoad || isloadOver){
            return ;
        }
        let {getData} = this.props;
        this.setState({
            isLoad: true
        });
        axios.post(
            `/yanzheng/lecturer/${this.props.api}?page=${page}&rows=${rows}`,
            qs.stringify(getData(this.props)),
            {
                withCredentials: true
            }
        ).then((res)=>{
            if(res.data.length>0) {
                listdata = listdata.concat(res.data)
                this.setState({
                    page: page + 1,
                    isLoad: false,
                    listdata
                });
                this.scroll.refresh();
            } else {
                this.setState({
                    isloadOver: true
                });
            }
        }).catch((res)=>{
          //  console.log(res.data);
        });
    }
    render(){
        let List = this.props.render;
        return (
            <div ref="wrap" className="wrapper">
                <div className="content" ref="content">
                    {this.props.children}
                    {<List
                        data={this.state.listdata}
                        loading = {this.state.isLoad}
                        loadOver = {this.state.isloadOver}
                    />}
                </div>
            </div>
        );
    }
}
