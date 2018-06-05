import React,{Component} from "react";
import Menu from "./menu";
import Header from "./header";
export default class MenuPage extends Component {
    constructor(arg){
        super(arg);
        this.state = {
            isOpen: false
        };
    }
    openMenu=(isOpen)=>{
        if(typeof isOpen == "undefined"){
            isOpen = !this.state.isOpen;
        }
        this.setState({
            isOpen
        });
    }
    closMenu=()=>{
        if(this.state.isOpen) {
            this.openMenu(false);
        }
    }
    cancelMove = (e)=>{
        e.preventDefault();
    }
    moveMenu=(state)=>{
        let {isOpen} = state;
        let {page} = this.refs;
        let header = page.querySelector("#header");
        let x = document.documentElement.clientWidth/7.5*4.5;
        if(isOpen){
            page.style.transition = ".3s cubic-bezier(.51,.84,.39,1.16)";
            document.querySelector("#root").addEventListener("touchmove",this.cancelMove);
        } else {
            x = 0;
            page.style.transition = ".3s";
            document.querySelector("#root").removeEventListener("touchmove",this.cancelMove);
        }
        page.style.transform = `translate3d(${x}px,0,0)`;
    }
    shouldComponentUpdate (nextProps,nextState){
        this.moveMenu(nextState);
        return false;
    }
    componentWillUnmount(){
        document.querySelector("#root").removeEventListener("touchmove",this.cancelMove);
    }
    render(){
        return (
            <div onTouchEnd={this.closMenu}>
                <Menu />
                <Header
                    isMenu={true}
                    openMenu = {this.openMenu}
                />
                <div ref="page" id="page" className={this.props.className}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
