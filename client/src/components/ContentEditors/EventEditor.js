import React,{useState, useCallback} from "react";
import { useDispatch } from "react-redux";

import { clubOperations } from "../../redux/club";
import CompetitionEditor from "./CompetitionEditor";

import MenuButton from "../Buttons/MenuButton"

import styles from "./editors.module.scss"

const EventEditor=()=>{
    const [error, setError]= useState(false)
    const [titleUa, setUaTitle]= useState('')
    const [titleEn, setEnTitle]= useState('')
    const [contentUa, setUaContent]= useState('')
    const [contentEn, setEnContent]= useState('')
    const [images, setImages]= useState({})
    const [competition, setCompetition]= useState('')
    const [backgroundImage, setBackgroundImage]= useState({})
    const [isCompetitionNeeded, setIsCompetitionNeeded]= useState(false)
   

    const handleInputs=(e, handleInput)=>{
        handleInput(e.target.value)
    }

    const handleSelectedFile=(e,handleInput)=>{
        handleInput(e.target.files)
     }

     const toSwitch = (toggle, setIsTrue) =>{
      const toggledItem = toggle ? false : true;
      setIsTrue(toggledItem);
    }

    const dispatch = useDispatch()
    const handleEventSubmit= useCallback(e=>{
        e.preventDefault();
        const link = "event"
        const date = Date.now();
        const event={titleUa,titleEn, contentUa, contentEn, date, images, backgroundImage}
        const body = {link, event, competition}

        if(titleUa ===""){ setError(true)}
        else if(titleEn ===""){ setError(true); return}
        else if(contentUa ===""){ setError(true); return}
        else if(contentEn ===""){ setError(true); return}
         dispatch(clubOperations.addContent(body))
       
    },[ dispatch,titleUa,titleEn, contentUa, contentEn, images, backgroundImage, competition])

    return(
        <>
          <form className={styles.editorForm}>
            <h3 className={styles.title}>Новини</h3>
            <label htmlFor="titleUa" className={styles.formLabel}>
          Введіть заголовок Ua*
          <br />
          <textarea
            type="text"
            value={titleUa}
            onChange={(e)=> handleInputs(e,setUaTitle)}
            name="titleUa"
            className={!error ? styles.formInput : styles.error}
            placeholder=" Введіть заголовок українською"
          />
        </label>

        <label htmlFor="titleEn" className={styles.formLabel}>
          Введіть заголовок En*
          <br />
          <textarea
            type="text"
            value={titleEn}
            onChange={(e)=> handleInputs(e,setEnTitle)}
            name="titleEN"
            className={!error ? styles.formInput : styles.error}
            placeholder=" Введіть заголовок англійською"
          />
        </label>
        
        <label htmlFor="contentUa" className={styles.formLabel}>
          Введіть текст Ua*
          <br />
          <textarea
            type="text"
            value={contentUa}
            onChange={(e)=>handleInputs(e,setUaContent)}
            name="contentUa"
            className={!error ? styles.formInput : styles.error}
            placeholder=" Введіть текст українською"
          />
        </label>

        <label htmlFor="contentEn" className={styles.formLabel}>
          Введіть текст En*
          <br />
          <textarea
            type="text"
            value={contentEn}
            onChange={(e)=>handleInputs(e,setEnContent)}
            name="contentEn"
            className={!error ? styles.formInput : styles.error}
            placeholder=" Введіть текст англійською"
          />
        </label>
        <label htmlFor="backgroudImage" className={styles.formLabel}>
          Виберіть фонове зображення*
          <br />
          <input
            type="file"
            onChange={(e)=>handleSelectedFile(e, setBackgroundImage)}
            name="backgroundmage"
            className={styles.formInputImage}
          />
        </label>
        <label htmlFor="image" className={styles.formLabel}>
          Виберіть зображення для галереї*
          <br />
          <input
            type="file"
            onChange={(e)=>handleSelectedFile(e, setImages)}
            name="image"
            className={styles.formInputImage}
            multiple
          />
        </label>
        <MenuButton text={"+Змагання"} onClick={e=>toSwitch(isCompetitionNeeded, setIsCompetitionNeeded)} className={isCompetitionNeeded&& styles.loaded}/>
         {isCompetitionNeeded&&<CompetitionEditor setCompetition={setCompetition} setIsNeeded={setIsCompetitionNeeded}/>}
         <MenuButton text={"Завантажити"} onClick={ handleEventSubmit}/>
            </form>


        </>
    )
}

export default EventEditor