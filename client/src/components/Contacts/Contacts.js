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
            <p className={styles.addres}>+38(097)999-12-11<br/>
            +38(096)033-03-33</p>
            <p className={styles.addres}>zakhidviter@gmail.com</p>
            <div className={styles.horisontalLine}></div>
           
        </div>
    )
}

export default Contacts;