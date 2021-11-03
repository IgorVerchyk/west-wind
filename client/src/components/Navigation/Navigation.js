import React,  { useContext } from "react"

import NavButton from "../Buttons/NavButton"
import { langContext } from "../AppLayout"

import styles from "./nav.module.scss"


export default function Navigation(){
    const text = useContext(langContext)
    return(
        
        <nav className={styles.navContainer}>
          <div className={styles.navButton}><NavButton path={`/`} text={text.navButtons.Home}/></div>
          <div className={styles.navButton}><NavButton path={`/competitions`} text={text.navButtons.Competitions}/></div>
          <div className={styles.navButton}><NavButton path={`/gallery`} text={text.navButtons.Gallery}/></div>
          <div className={styles.navButton}><NavButton path={`/about`} text={text.navButtons.AboutClub}/></div>
          <div className={styles.navButton}><NavButton path={`/contacts`} text={text.navButtons.Contacts}/></div>

        </nav>
       
    )
  
}