import React,{Component} from "react";
export default class LecturerTab extends Component {
    render(){
        return (<section className="lecturer-item">
            <h2 className="lecturer-title"><img src={require("../../img/lecturer-title.png")} /></h2>
            <div className="lecturer-tab">
                <ul className="lecturer-list">
                    <li>
                        <a href="javascript:;">
                            <div className="lecturer-thumbnail"></div>
                            <p className="lecturer-name">莫涛</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div className="lecturer-thumbnail"></div>
                            <p className="lecturer-name">莫涛</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div className="lecturer-thumbnail"></div>
                            <p className="lecturer-name">莫涛</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div className="lecturer-thumbnail"></div>
                            <p className="lecturer-name">莫涛</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div className="lecturer-thumbnail"></div>
                            <p className="lecturer-name">莫涛</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div className="lecturer-thumbnail"></div>
                            <p className="lecturer-name">莫涛</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div className="lecturer-thumbnail"></div>
                            <p className="lecturer-name">莫涛</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div className="lecturer-thumbnail"></div>
                            <p className="lecturer-name">莫涛</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div className="lecturer-thumbnail"></div>
                            <p className="lecturer-name">莫涛</p>
                        </a>
                    </li>
                </ul>
                <nav className="lecturer-nav">
                    <a  className="active"></a><a></a><a></a><a></a>
                </nav>
            </div>
        </section>);
    }
}