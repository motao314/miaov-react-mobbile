import React,{Component} from "react";
export default class Tab extends Component {
    tabSwipe=()=>{
        if(!this.props.data.length) {
            return;
        }
        let active = 0;
        let x = 0;
        let startPoint = {};
        let {picList,nav,tab} = this.refs;
        let navs = Array.from(nav.children);
        let isFirst = true;
        let isMove = false;
        let startX = 0;
        let dis = 0;
        let {activeClass} = this.props;
        let timer = 0;
        picList.style.width = picList.children.length + "00%";
        auto();
        tab.addEventListener("touchstart",function(e){
            clearInterval(timer);
            picList.style.transition = "none";
            if(active == 0){
                active = navs.length;
            }
            if(active == navs.length*2 - 1){
                active = navs.length - 1;
            }
            x = -active*window.screen.width;
            setX();
            startPoint = {
                x: e.changedTouches[0].pageX,
                y: e.changedTouches[0].pageY
            };
            isMove = false;
            isFirst = true;
            startX = x;
        });
        tab.addEventListener("touchmove",function(e){
            let nowPoint = {
                x: e.changedTouches[0].pageX,
                y: e.changedTouches[0].pageY
            };
            if(isFirst){
                let dis = Math.abs(nowPoint.x - startPoint.x) - Math.abs(nowPoint.y - startPoint.y);
                if( dis > 2){
                    isFirst = false;
                    isMove = true;
                } else if(dis < -2) {
                    isFirst = false;
                    isMove = false;
                }
            }
            if(isMove){
                dis = nowPoint.x - startPoint.x;
                x = startX + dis;
                setX();
                e.preventDefault();
            }
        });
        tab.addEventListener("touchend",function(e){
            if(isMove){
                dis = Math.abs(dis) > 80?dis:0;
                if(dis){
                    active -= dis/Math.abs(dis);
                }
                x = -active*window.screen.width;
                picList.style.transition = ".2s";
                setX();
                navs.forEach((item)=>{
                    item.classList.remove(activeClass);
                });
                navs[active%navs.length].classList.add(activeClass);
            }
            auto();
        });
        function setX(){
            picList.style.transform = picList.style.WebkitTransform = `translate3d(${x}px,0,0)`;
        }
        function auto(){
            timer = setInterval(next,2000);
        }
        function next(){
            if(active == navs.length*2 - 1){
                active = navs.length - 1;
                x = -active*window.screen.width;
                picList.style.transition = "none";
                setX();
            }
            setTimeout(function(){
                active++;
                x = -active*window.screen.width;
                picList.style.transition = ".2s";
                setX();
                navs.forEach((item)=>{
                    item.classList.remove(activeClass);
                });
                navs[active%navs.length].classList.add(activeClass);
            },50)
        }
    }
    componentDidMount(){
        this.tabSwipe();
    }
    shouldComponentUpdate (nextProps,nextState){
        return false;
    }
    render(){
        let {data,renderItem,activeClass} = this.props;
        let data2 = data.concat(data);
        let nav = (<nav
            className="nav"
            ref = "nav"
        >
            {data.map((item,index)=>{
                return  0 == index?<a key={index} className={activeClass}></a>:<a key={index}></a>
            })}
        </nav>);
        return (
            <div id={this.props.id} className="tab" ref="tab" >
                <ul className="picList" ref="picList">
                    {data2.map((item,index)=>{
                        return (<li key={index}>
                            {renderItem(item)}
                        </li>);
                    })}
                </ul>
                {data.length?nav:""}
            </div>
        );
    }
}