import React, {useState, useEffect, useContext} from "react"
import {useSelector, useDispatch} from "react-redux"

import { langContext } from "../AppLayout"
import { authOperations } from "../../redux/auth"

import Comp from "./CompetitionCard"
import MenuButton from "../Buttons/MenuButton"

import styles from "./competition.module.scss"

const Competitions=()=>{
    const [competitions, setCompetitions]= useState(null);
    const [index, setIndex]=useState(8)
    
 const selector = useSelector(state=>state.data.content.competitions)
 const isLoggedIn= useSelector(state=>state.auth.isLogged)
 const textContent =useContext(langContext)

 const dispatch= useDispatch()
 if(isLoggedIn){dispatch(authOperations.currentUser(isLoggedIn))}
 useEffect(()=>{
   competitions&& setCompetitions(selector.slice(0, index))
   
  },[index, selector,competitions])

  const showMoreCompetitions = (index, setIndex)=>{
    setIndex(index+8)
  }
 
return(
  <div className={styles.container}>
  <h4 className={styles.cometitionsTopTitle}>{textContent.clickToSee}</h4>
<div className={styles.competitionSectionContainer}>
    {competitions&&competitions.map(competition=><Comp key={competition._id} competition={competition}/>)}
    {(selector) &&(selector.length > 8) &&(selector.length > index)
      &&<MenuButton text={textContent.galleryMoreButton} onClick={e=>showMoreCompetitions(index, setIndex)}/>}
</div>
</div>
)
}

export default Competitions;