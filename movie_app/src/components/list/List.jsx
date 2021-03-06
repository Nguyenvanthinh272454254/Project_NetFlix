import React, { useRef, useState } from 'react'
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@material-ui/icons";
import './List.scss'

import './List.scss'
import ListIterm from '../listIterm/ListIterm'

const List = ({list}) => {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber,setSlideNumber]=useState(0);
    const [clickLimit,setClickLimit]=useState(window.innerWidth/230);


    const listRef=useRef()
    const handleClick=(direction)=>{
        setIsMoved(true);
        const distance=listRef.current.getBoundingClientRect().x -50
        if(direction==="left" && slideNumber >0){
            setSlideNumber(slideNumber-1)
            listRef.current.style.transform=`translateX(${230 + distance}px)`
        } if(direction==="right"  && slideNumber <10 -clickLimit){
            setSlideNumber(slideNumber+1)
            listRef.current.style.transform=`translateX(${-230 + distance}px)`
        }
        console.log(distance)

    }
    return (
        <div className="list">
            <span className="listTitle">{list.title}</span>s
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left" onClick={()=>handleClick("left")}
                style={{ display: !isMoved && "none" }}/>
                <div className="container" ref={listRef}>
                   {list.content.map((item,i)=>(
                      <ListIterm index={i} item={item}/> 
                   )) }
                  
                </div>  
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClick("right")}/>
            </div>

        </div>
    )
}

export default List
