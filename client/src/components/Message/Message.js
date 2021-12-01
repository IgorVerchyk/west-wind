import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import appOperations from "../../redux/app/appOperations";

import styles from "./message.module.scss"
import MenuButton from "../Buttons/MenuButton"

 const Message =()=>{

     const message = useSelector(state=>state.app.message)

    
     const dispatch= useDispatch()

    const onClose=useCallback(e=>{
        dispatch(appOperations.setMessage(null))
     },[dispatch])

     return(
         <div className={styles.messageContainer}>
             <p className={styles.message}>{message}</p>
             <MenuButton text={"OK"} onClick={onClose}/>
         </div>
     )
 }

 export default Message