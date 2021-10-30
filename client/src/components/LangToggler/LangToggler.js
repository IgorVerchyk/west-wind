import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import appOperations from "../../redux/app/appOperations"

import s from "./lang.module.scss"



const LangToggler =()=>{

const [isUa, setIsUa]=useState(true)
    const currentLang = useSelector(state=>state.app.language)

    useEffect(()=>{
        if(currentLang ==="Ua"){
            setIsUa(true)
        }
        else{
            setIsUa(false)
        }
    }, [currentLang])
    const dispatch = useDispatch()
const setLang =()=>{  
    if(currentLang === "Ua"){dispatch(appOperations.setLanguage("En"))}
    else{dispatch(appOperations.setLanguage("Ua"))}
   
}
    return(
        <div className={s.buttoncontainer}>
            <div className={isUa? s.active: s.passive} onClick={setLang}>Ua</div>
            <div className={isUa? s.passive: s.active} onClick={setLang}>En</div>
        </div>
    )
}

export default LangToggler
