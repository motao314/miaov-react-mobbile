import React,{Component} from "react";
import Tab from "../../component/tab";
import Miaov from "./miaov";
import MenuPage from "../../component/menuPage";
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
    render(){
        return (
            <MenuPage
                className="index-page"
            >
                <Scroll
                    render = {Wroks}
                    api = "lists"
                    getData = {(props)=>{
                        return {
                            order:"desc",
                            sort:"id",
                            category_id:1,
                            recommend:1
                        }
                    }}
                >
                    <Tab
                        id="banner"
                        activeClass = "active"
                        data={tabImgs}
                        renderItem={(item)=>{
                            return (<img src={item} />)
                        }}
                    />
                    <Curriculum />
                    <RegisterVip />
                    <Miaov />
                </Scroll>
            </MenuPage>
        );
    }
}
