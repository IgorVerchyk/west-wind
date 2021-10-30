import React from "react"

import styles from './buttons.module.scss'

export default function MenuButton ({text, onClick}){
    return(
        <div className={styles.menuButton}>
           <p className={styles.buttonText} onClick={onClick}>{text}</p>
        </div>
    )

}
