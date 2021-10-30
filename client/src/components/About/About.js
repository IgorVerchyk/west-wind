import React, {useContext} from "react"
import { useSelector, useDispatch } from "react-redux"

import {langContext} from "../AppLayout"
import { authOperations } from "../../redux/auth"

import ClubMembers from "./ClubMembers"

import styles from "./about.module.scss"

const About=()=>{ 
    const clubSelector = useSelector(state=> state.data.content.club)
    const isLoggedIn= useSelector(state=>state.auth.isLogged)
    const textContent = useContext(langContext)
    const ouners = clubSelector.filter(profile=>profile.isOuner === true)
    const members =  clubSelector.filter(profile=>profile.isOuner === false)

    const dispatch= useDispatch()
    if(isLoggedIn){dispatch(authOperations.currentUser(isLoggedIn))}

return(  
    <div className={styles.aboutContainer}>
        <h2 className={styles.aboutTitle}>{textContent.aboutClubTitle}</h2>
        <p className={styles.aboutText}>{textContent.aboutClub}</p>
        <h3 className={styles.aboutTitle}>{textContent.aboutOunerSectionTitle}</h3>
            <div className={styles.lowerLine}></div>
        <div className={styles.profilesSection}>
            {ouners&&ouners.map(profile=><ClubMembers key={profile._id} id={profile._id}/>)}
        </div>
        <h3 className={styles.aboutTitle}>{textContent.aboutClubMenbersSectionTitle}</h3>
        <div className={styles.lowerLine}></div>
        <div className={styles.profilesSection}>
        {members&&members.map(profile=><ClubMembers key={profile._id} id={profile._id}/>)}
        </div>
    </div>
)

}

export default About;