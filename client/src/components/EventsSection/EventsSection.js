import React, { useState, useEffect, useContext} from "react"
import { useSelector  } from "react-redux"
import { langContext } from "../AppLayout"

import useGetContent from "../../hooks/useGetContent"

import Event from "./Event"
import MenuButton from "../Buttons/MenuButton"

import styles from "./events.module.scss"


const NewsSection =()=>{
    const [events, setEvents]= useState([]);
    const [index, setIndex]=useState(9)
    
 const selector = useSelector(state=>state.data.content.events)
 const textContent =useContext(langContext)

 useEffect(() => {
   selector&&
    setEvents(selector.slice(0, index))
   },[selector, index]);  

   const showMoreEvents = (index, setIndex)=>{
    setIndex(index+8)
  }

useGetContent("events")
return(
    <>
    <ul className={styles.eventSectionContainer}>
       {events&&events.map(event=><Event key={event._id} event={event} />)}
    </ul>
    {(selector)&&(selector.length > 8) &&(selector.length > index)
      &&<MenuButton text={textContent.galleryMoreButton} onClick={e=>showMoreEvents(index, setIndex)}/>}
    </>
)
}

export default NewsSection;