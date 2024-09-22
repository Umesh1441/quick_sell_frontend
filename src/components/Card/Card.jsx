import React from 'react'
import { FaExclamation , FaRegCircle } from "react-icons/fa";
import { VscWorkspaceUnknown } from "react-icons/vsc";
import { HiMiniUserCircle } from "react-icons/hi2";
import { TbProgress } from "react-icons/tb";
import './Card.css';

const Card = ({id, title, tag, status}) => {
  return (
    <div className="cardContainer flex-gap-10" style={{gap : '5px',marginBottom:"20px"}}>
        <div className="cardHeading flex-sb">
            <span style={{textTransform : "uppercase"}} className='color-grey'>{id}</span>
            <div className="relative" >
            <HiMiniUserCircle  style={{ width : "30px", height : "30px"}} color="#81D4FA" />
            </div>
        </div>
        <div className="cardTitle" style={{fontWeight : 200}} >
            <p>
                {
                    status.toLowerCase()==="todo" ? <FaRegCircle style={{color:"greenyellow"}}/> : 
                    (status.toLowerCase()==="backlog" ? <VscWorkspaceUnknown style={{color:"red"}}/> : <TbProgress style={{color:"orange"}}/>  )
                }
                {"  "+title}
            </p>
        </div>
        <div className="cardTags">
        <div className="tags color-grey">
            <FaExclamation style={{background:"grey",padding:"2px",color:"white"}}/>
            </div>
            {
                tag?.map((elem, index) => {
                    return <div key={index} className="tags color-grey"> <span>•</span> {elem}</div>
                })
            }
        </div>
    </div>
  )
}

export default Card;