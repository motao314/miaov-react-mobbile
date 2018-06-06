import React,{Component} from "react";
import Tab from "../../component/tab";
import axios from "axios";
import qs from "qs";
export default class LecturerTab extends Component {
    constructor(arg){
        super(arg);
        this.state = {
           list:[]
        };
        this.getLecturerData();
    }
    getLecturerData=()=>{
        axios.post(
            "https://www.koocv.com/lecturer/lists?page=1&rows=20",
            qs.stringify({
                order:"desc",
                sort:"sort",
                category_id:2,
                recommend:0
            })
        ).then(
            (res)=>{
                let arr = this.formatArr(res.data);
                let {list} = this.state;
                list = list.concat(arr);
                this.setState({list});
            }
        ).catch(
            (res)=>{
                console.log(res);
            }
        )
    }
    formatArr=(arr)=>{
        let arr2 = [];
        let length = 3;
        for(let i = 0; i < arr.length; i += length){
            let arrChild = [];
            let arrChildLength = length > (arr.length - i)?(arr.length - i):length;
            for (let j = 0; j < arrChildLength; j++){
                arrChild.push(arr[i + j]);
            }
            arr2.push(arrChild);
        }
        return arr2;
    }
    getTab=()=>{
        return ( <Tab
            id="lecturer-tab"
            activeClass="active"
            data={this.state.list}
            renderItem = {
                (item)=>{
                    return (
                        <ul className="lecturer-list">
                            {item.map((item)=>{
                                return (<li key={item.id} data-id={item.id}>
                                    <a>
                                        <div
                                            className="lecturer-thumbnail"
                                            style={{
                                                backgroundImage: `url(${item.icon})`
                                            }}
                                        />
                                        <p className="lecturer-name">{item.title}</p>
                                    </a>
                                </li>)
                            })}
                        </ul>
                    );
                }
            }
        />)
    }
    render(){
        return (<section className="lecturer-item">
            <h2 className="lecturer-title"><img src={require("../../img/lecturer-title.png")} /></h2>
            {this.state.list.length>0?this.getTab():""}
        </section>);
    }
}