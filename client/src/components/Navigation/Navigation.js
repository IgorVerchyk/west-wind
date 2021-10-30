import React,  { useContext } from "react"

import NavButton from "../Buttons/NavButton"
import { langContext } from "../AppLayout"

import styles from "./nav.module.scss"


export default function Navigation(){
    const text = useContext(langContext)
    return(
        <nav className={styles.navContainer}>
          
         <NavButton path={`/`} text={text.navButtons.Home}/>
         <NavButton path={`/competitions`} text={text.navButtons.Competitions}/>
         <NavButton path={`/gallery`} text={text.navButtons.Gallery}/>
         <NavButton path={`/about`} text={text.navButtons.AboutClub}/>
         <NavButton path={`/contacts`} text={text.navButtons.Contacts}/>

        </nav>
    )
  
}