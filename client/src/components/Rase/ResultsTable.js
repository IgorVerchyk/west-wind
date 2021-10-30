import React from "react"

import styles from "./rase.module.scss"

const ResultsTable=( {participant})=>{
    console.log(participant)
    const{team, time }= participant
    return(
        <div className={styles.partisipant}>
            <div className={styles.team}>
            <p >{team}</p>
            </div>
            <div className={styles.time}>
            <p >{time}</p>
            </div>
        </div>
    )
}

export default ResultsTable;