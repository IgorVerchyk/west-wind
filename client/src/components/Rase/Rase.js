import React, { useState,useContext } from "react"

import { langContext } from "../AppLayout"

import Boat from "../Boat/Boat";
import ResultsTable from "./ResultsTable";
import MenuButton from "../Buttons/MenuButton"


import styles from "./rase.module.scss"

const Rase=({rase})=>{
    const [showCrew, setIsShowCrew]= useState(false)
    const textContex = useContext(langContext)

    const toSwitch = (toggle, setIsTrue) =>{
        const toggledItem = toggle ? false : true;
        setIsTrue(toggledItem);
      }
    return(
      <>
        <div className={styles.raseContainer}>
            <div className={styles.raseHeader}>  
            <h4 className={styles.raseTitle}>{rase.raseTitle}</h4>
            </div>
            {rase.protocols.map(item=><ResultsTable key={item.team} participant={item}/>)}  
        </div>
        <MenuButton text={textContex.raseShowCrew} onClick={e=>toSwitch(showCrew, setIsShowCrew)}/>
        {showCrew && <Boat crew={rase.selectedPartisipants} onClose={setIsShowCrew}/>}
        <div className={styles.lowerLine}></div>
    </>
    )
}

export default Rase;