import React, {useContext} from "react"
import {useSelector} from "react-redux"

import Gallery from "../Gallery/Gallery"
import { langContext } from "../AppLayout"


import styles from "./singleEvent.module.scss"

 const SingleEventPage = ({id})=>{
     // selectors
     const languageSelector = useSelector(state=>state.app.language)
     const eventSelector =  useSelector(state=>state.data.content.events)
     const competitionsSelector = useSelector(state=>state.data.content.competitions)
     //finding event data
     const getEvent = (events,language,id)=>{
        const currentEvent=  events.find(event=>event._id === id)
        if(language==="Ua"){ return {title:currentEvent.titleUa, text: currentEvent.contentUa, background:currentEvent.eventBackgroundImage, gallery:currentEvent.eventGallery, competition:currentEvent.competition}
    }else{ return {title:currentEvent.titleEn, text: currentEvent.contentEn, background:currentEvent.eventBackgroundImage, gallery:currentEvent.eventGallery, competition:currentEvent.competition}}
     }
     const textContent =useContext(langContext)
     const event = getEvent(eventSelector,languageSelector, id)
     const currentCompetition= competitionsSelector.find(competition=>competition._id===event.competition)
    
     
  return(
      <div className={styles.eventContainer}>
          <div className={styles.heroContainer}>
              <div className={styles.overlay}>
              <img src={`https://drive.google.com/uc?export=view&id=${event.background}`} alt={event.title} className={styles.background}/>
              </div> 
              <div className={styles.titleContainer}>
              <h2 className={styles.title}>{event.title}</h2>
              </div>
             
          </div>
          <p className={styles.text}>{event.text}</p>
          {currentCompetition&&<a  href={`https://drive.google.com/file/d/${currentCompetition.rases}/view?usp=sharing`} target="_blank" rel="noreferrer" className={styles.competitionTopTitle}>
              <p>{textContent.clickToGo}</p>
              </a>}
          <Gallery collection={event.gallery}/>
         

      </div>
  )
}

export default SingleEventPage