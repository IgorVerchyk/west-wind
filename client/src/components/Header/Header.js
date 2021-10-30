import React from "react"

import Navigation from "../Navigation/Navigation"
import LangToggler from "../LangToggler/LangToggler"

import styles from "./header.module.scss"

export default function Header (){
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
            <div className={styles.logoContainer}></div>
            <Navigation/>
            <LangToggler/>
            </div>
            
            
            
        </header>
    )
}