import React from "react"
import { useSelector } from "react-redux"

import DeleteButton from "../Buttons/DeleteButton"

import styles from "./about.module.scss"

const ClubMembers=({id})=>{
    const currentLanguage = useSelector(state=>state.app.language)
    const isLogin = useSelector(state=>state.auth.isLogged)
    const clubSelector=useSelector(state=>state.data.content.club)
    const currentProfile= clubSelector.find(profile=>profile._id === id)
    const getLangProfileData= (selector, language)=>{
        if(language === "Ua"){ 
            return {name: selector.nameUa, description: selector.uaDescription}
        }  else{return {name: selector.nameEn, description: selector.enDescription}}
    }
    const profileData = getLangProfileData(currentProfile, currentLanguage)
    return(
        <div className={styles.profileContainer}>
        {isLogin && <DeleteButton id={currentProfile._id} link={"club"}/>}
         <div className={styles.avatarOverlay}>
             <img src={`https://drive.google.com/uc?export=view&id=${currentProfile.profileAvatar}`} alt={profileData.name} className={styles.avatar}/>
         </div>
         <div className={styles.descContainer}>
             <h4 className={styles.name}>{profileData.name}</h4>
             <p className={styles.description}>{profileData.description}</p>
         </div>
         <div className={styles.lowerLine}></div>
        </div>
    )
}

export default ClubMembers;