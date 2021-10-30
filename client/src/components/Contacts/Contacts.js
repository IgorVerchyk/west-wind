import React,  { useContext } from "react"
import { langContext } from "../AppLayout"

import styles from "./contacts.module.scss"

const Contacts =()=>{
    const textContent = useContext(langContext)
    
    return(
        <div className={styles.contactsContainer}>
            <h2 className={styles.contactTitle}>{textContent.contacts.contactTitle}</h2>
            <div className={styles.horisontalLine}></div>
            <p className={styles.addres}>{textContent.contacts.addres}</p>
            <p className={styles.addres}>{textContent.contacts.phoneTitle&&`5555-555-555`}</p>
            <p className={styles.addres}>test@testemail.com</p>
            <div className={styles.horisontalLine}></div>
           
        </div>
    )
}

export default Contacts;