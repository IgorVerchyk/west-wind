import React, {useState, useEffect} from "react"
import { useSelector } from "react-redux";

import DeleteButton from "../Buttons/DeleteButton";
import styles from "./competition.module.scss"

const Comp = ({competition})=>{
   const [content, setContent]=useState("")

   const languageSelector = useSelector(state=>state.app.language)
   const isLogin = useSelector(state=>state.auth.isLogged)
 useEffect(()=>{
     const background = competition.backgroundImage;
     const toTrimmText = text =>{
        if(text.length>90){
           return `${text.slice(0,90)}...`
       }else{ return text}
   }
  if (languageSelector==="Ua"){
      const title =  toTrimmText( competition.competitionTitleUk)
      const content={title, background}
      setContent(content)
  }
  else{
   const title =  toTrimmText( competition.competitionTitleEn)
   const content={title,  background}
   setContent(content)
  }
 }, [languageSelector, competition.backgroundImage, competition.competitionTitleEn, competition.competitionTitleUk])
    return(
        <div className={styles.competitionLink}>
              {isLogin && <DeleteButton id={competition._id} link={"competitions"}/>}
            <a href={`https://drive.google.com/file/d/${competition.rases}/view?usp=sharing`} target="_blank" rel="noreferrer" >
           
             <div
        className={styles.competition}
        >
            <div className={styles.competitionOverlay}>
            <img src={`https://drive.google.com/uc?export=view&id=${content.background}`} alt={competition._id} className={styles.compBackground}/>
            </div>
            <h3 className={styles.compTitle}>{content.title}</h3>
           </div>
        </a>
        </div>
        
    )

}

export default Comp;