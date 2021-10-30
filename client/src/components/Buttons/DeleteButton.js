import React from "react";
import {useDispatch} from "react-redux"

import { clubOperations } from "../../redux/club";

import styles from "./buttons.module.scss"

const DeleteButton =({id, link})=>{
    const dispatch = useDispatch()
    return(
        <div className={styles.deleteButton} onClick={e=>dispatch(clubOperations.deleteContent(id, link))}></div>
    )
}

export default DeleteButton