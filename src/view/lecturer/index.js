import React,{Component} from "react";
import LecturerTab from "./lecturer-tab";
import JoinUs from "./join-us";
import JobDescription from "./job-description";
import Footer from "../../component/footer";
import MenuPage from "../../component/menuPage";
require('../../css/lecturer.css');

export default class Lecturer extends Component {
    render(){
        return (
            <MenuPage>
                <LecturerTab />
                <JoinUs />
                <JobDescription />
                <Footer />
            </MenuPage>
        );
    }
}
