import React,{useState, useEffect} from "react"
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"


import DeleteButton from "../Buttons/DeleteButton"


import styles from "./events.module.scss"

const Event = ({event})=>{
    const [content, setContent]=useState("")

    const languageSelector = useSelector(state=>state.app.language)
    const isLogin = useSelector(state=>state.auth.isLogged)
  useEffect(()=>{
      const gallery = event.eventGallery;
      const background = event.eventBackgroundImage;
      const competitionLink = event.competition
      const toTrimmText = (text, length) =>{
         if(text.length>length){
            return `${text.slice(0,length)}...`
        }else{ return text}
    }
   if (languageSelector==="Ua"){
       const title = toTrimmText(event.titleUa, 25)
       const text = toTrimmText( event.contentUa, 90)
       const content={title, text, gallery, background, competitionLink}
       setContent(content)
   }
   else{
    const title = toTrimmText(event.titleEn, 25)
    const text = toTrimmText( event.contentEn, 90)
    const content={title, text, gallery, background, competitionLink}
    setContent(content)
   }
  }, [languageSelector,event.titleEn, event.titleUa, event.competition, event.contentEn, event.contentUa, event.eventBackgroundImage, event.eventGallery])
const date = event.date.slice(0,-14);

return(
    <li className={styles.event}> 
    {isLogin && <DeleteButton id={event._id} link={"events"}/>}
    <Link  to={{
          pathname: `/event/:${event._id}`,
          state: { id: event._id
        },
        }}> 
    <div className={styles.eventContainer} >
        <img src={`https://drive.google.com/uc?export=view&id=${event.eventBackgroundImage}`} alt={event.title} className={styles.eventBackground}/>
        <div className={styles.eventDeskr}>
        <p className={styles.eventDate}>{date}</p>
        <p className={styles.eventTitle}>{content.title}</p>
        <p className={styles.eventDescription}>{content.text}</p>
        </div>
    </div>
    </Link>
   
    </li>
     
    )
   
}

export default Event;