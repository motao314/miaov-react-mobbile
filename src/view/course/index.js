import React,{Component} from "react";
import Header from "../../component/header";
import Menu from "../../component/menu";
import Footer from "../../component/footer";
require('../../css/course.css');

export default class Course extends Component {
    render(){
        return (
            <div>
                <Menu />
                <div id="page">
                    <Header isMenu={true} />
                    <section className="course-item">
                        <h2 className="course-title"><img src={require("../../img/course-title.png")} /></h2>
                        <div className="course-tab">
                            <ul className="course-list">
                                <li>
                                    <a href="javascript:;">
                                        <div className="course-thumbnail"></div>
                                        <p className="course-name">莫涛</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <div className="course-thumbnail"></div>
                                        <p className="course-name">莫涛</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <div className="course-thumbnail"></div>
                                        <p className="course-name">莫涛</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <div className="course-thumbnail"></div>
                                        <p className="course-name">莫涛</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <div className="course-thumbnail"></div>
                                        <p className="course-name">莫涛</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <div className="course-thumbnail"></div>
                                        <p className="course-name">莫涛</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <div className="course-thumbnail"></div>
                                        <p className="course-name">莫涛</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <div className="course-thumbnail"></div>
                                        <p className="course-name">莫涛</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <div className="course-thumbnail"></div>
                                        <p className="course-name">莫涛</p>
                                    </a>
                                </li>
                            </ul>
                            <nav className="course-nav">
                                <a href="javascript:;" className="active"></a><a href="javascript:;"></a><a href="javascript:;"></a><a href="javascript:;"></a>
                            </nav>
                        </div>
                    </section>
                    <section className="join-us">
                        <h2 className="join-us-title">加入我们</h2>
                        <ul className="join-con">
                            <li className="join-course">
                                <div className="join-box">
                                    <span className="join-tag">NEW</span>
                                    <h3 className="join-title">web讲师</h3>
                                    <p className="join-info">人数：人数不限，多多益善</p>
                                    <p className="join-info">薪资：面议</p>
                                </div>
                            </li>
                            <li className="join-adviser">
                                <div className="join-box">
                                    <h3 className="join-title">课程顾问</h3>
                                    <p className="join-info">人数：3人</p>
                                    <p className="join-info">薪资：底薪+提成</p>
                                </div>
                            </li>
                            <li className="join-service">
                                <div className="join-box">
                                    <h3 className="join-title">客服</h3>
                                    <p className="join-info">人数：3人</p>
                                    <p className="join-info">薪资：面议</p>
                                </div>
                            </li>
                            <li className="join-assistant">
                                <div className="join-box">
                                    <h3 className="join-title">行政前台助理</h3>
                                    <p className="join-info">人数：3人</p>
                                    <p className="join-info">薪资：底薪+提成</p>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <div className="job-description">
                        <div className="job-photo"></div>
                        <div className="job-text">
                            <p>欢迎大家来到妙味课堂，在这里，公司文化轻松包容，且呈多元化发展倾向，职位晋级标准清晰量化，虽有上下级职称、却无论资排辈陋习……</p>
                            <p className="job-explain">本招聘信息长期有效</p>
                        </div>
                    </div>
                    <Footer />
                </div>
                <div className="popup">
                    <div className="popup-win">
                        <div className="popup-photo"></div>
                        <h3 className="popup-title">莫涛-妙味课堂 全职讲师</h3>
                        <div className="popup-con">
                            <p>WEB强势品牌 HTML5梦工厂 联合 IT实体培训机构 妙味课堂 强强联手、为广大学员打造了崭新的IT培训新品牌：WEB学院，近期在上海开设第一个分点，为大家带来全新授课模式与最快乐的学习体验！</p>
                            <p>课程总共设置5个月学习周期，共20多次快乐学员欢乐聚会、IT界著名大牛分享经验，力图让大家扎实学到实用IT技能、找到一份满意工作的同时，快乐享受IT技术、重新认识IT技术的有趣和惊喜！</p>
                            <p>课程总共设置5个月学习周期，共20多次快乐学员欢乐聚会、IT界著名大牛分享经验，力图让大家扎实学到实用IT技能、找到一份满意工作的同时，快乐享受IT技术、重新认识IT技术的有趣和惊喜！</p>
                            <p>课程总共设置5个月学习周期，共20多次快乐学员欢乐聚会、IT界著名大牛分享经验，力图让大家扎实学到实用IT技能、找到一份满意工作的同时，快乐享受IT技术、重新认识IT技术的有趣和惊喜！</p>
                        </div>
                        <a href="javascript:;" className="close"></a>
                    </div>
                </div>
            </div>
        );
    }
}
