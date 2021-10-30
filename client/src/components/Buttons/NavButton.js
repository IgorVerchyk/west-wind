import React from "react"

import styles from "./buttons.module.scss"

export default function NavButtons({path,text}){
    return(
        <a href={path} className={styles.navButton}>{text}</a>
    )
}