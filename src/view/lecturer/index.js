import React,{Component} from "react";
import LecturerTab from "./lecturer-tab";
import JoinUs from "./join-us";
import JobDescription from "./job-description";
import Footer from "../../component/footer";
import MenuPage from "../../component/menuPage";
import Popup from "./popup";
import axios from "axios";
import qs from "qs";
require('../../css/lecturer.css');
export default class Lecturer extends Component {
    constructor(arg){
        super(arg);
        this.state = {
            isPopup: false
        }
    }
    popupData = {}
    getPopupData = (id)=>{
        axios.post(
            "https://www.koocv.com//lecturer/info",
             qs.stringify({
                 article_id: id
             })
        ).then((res)=>{
            //console.log(res.data);
            this.popupData = res.data;
            this.showPopup();
        }).catch((res)=>{
            console.log(res.data);
        });
    }
    showPopup = ()=>{
        this.setState({
            isPopup:true
        });
    }
    hidePopup = ()=>{
        this.setState({
            isPopup: false
        });
    }
    render(){
        return (
            <div>
                <MenuPage
                    className="lecturer-page"
                >
                    <LecturerTab
                        show={this.getPopupData}
                    />
                    <JoinUs />
                    <JobDescription />
                    <Footer />
                </MenuPage>
                {this.state.isPopup?(
                    <Popup
                        data={this.popupData}
                        hide={this.hidePopup}
                    />
                ):""}
            </div>
        );
    }
}
