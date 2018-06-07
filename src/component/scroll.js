import React,{Component} from "react";
import axios from "axios";
import qs from 'qs';
export default class Scroll extends Component {
    constructor(arg){
        super(arg);
        let {lowerScroll} = this.props;
        lowerScroll = lowerScroll?lowerScroll:100;
        this.state = {
            page: 1,
            rows: 20,
            listdata: [],
            isLoad: false,
            lowerScroll,
            isLoadIng: true,
            loadInfo: "正在加载更多内容"
        };
        this.loadMore = this.loadMore.bind(this);
    }
    componentDidMount(){
        let that = this;
        this.loadMore();
        window.addEventListener("scroll",this.toScroll)
    }
    toScroll=()=>{
        if(!this.state.isLoadIng){
            return ;
        }
        let scrollDis = document.documentElement.offsetHeight - window.scrollY - document.documentElement.clientHeight;
        if(scrollDis <= this.state.lowerScroll){
            this.loadMore();
        }
    }
    componentWillUnmount(){
        window.removeEventListener("scroll",this.toScroll)
    }
    loadMore(){
        if(this.state.isLoad){
            return ;
        }
        let {listdata,page,rows} = this.state;
        let {getData} = this.props;
        this.setState({
            isLoad: true
        });
        axios.post(
            `https://www.koocv.com/lecturer/lists?page=${page}&rows=${rows}`,
            qs.stringify(getData(this.porps))
        ).then((res)=>{
            console.log(res.data);
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
    render(){
        let loadMore = <footer className="works-more"><span>{this.state.loadInfo}</span></footer>;
         let List = this.props.render;
        return (
            <div ref="scroll">
                {this.props.children}
                {<List data={this.state.listdata} />}
                {this.state.isLoad?loadMore:""}
            </div>
        );
    }
}
