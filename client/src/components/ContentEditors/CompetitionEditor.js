import React,{useState} from "react";

import MenuButton from "../Buttons/MenuButton";

import styles from "./editors.module.scss"

const CompetitionEditor =({setCompetition, setIsNeeded})=>{
    const [error, setError]= useState(false)
    const [competitionTitleUk, setCompetitionTitleUk]= useState('')
    const [competitionTitleEn, setCompetitionTitleEn]= useState('')
    const [compBackgroudImage, setCompBackgroundImage]= useState('')
    const [rases, setRases]= useState('')
   

      const handleInputs=(e, handleInput)=>{
        handleInput(e.target.value)
    }

    const handleSelectedFile=(e,handleInput)=>{
        handleInput(e.target.files)
     }

     const handleCompetitionContent= ()=>{
       if(competitionTitleUk.length<3){return setError(true)}
       else  if(competitionTitleEn.length<3){return setError(true)}
       else  if(compBackgroudImage===''){return setError(true)}
        else  if(rases===''){return setError(true)}
        setError(false)
        setCompetition({competitionTitleUk, competitionTitleEn, compBackgroudImage, rases})
        setIsNeeded(false)
     }
  return(
    <div className={error?styles.raseContainerError: styles.raseContainer}>
            <h3 className={styles.title}>Змагання</h3>
            <label htmlFor="titleUa" className={styles.formLabel}>
          Введіть заголовок Ua*
          <br />
          <textarea
            type="text"
            value={competitionTitleUk}
            onChange={(e)=> handleInputs(e,setCompetitionTitleUk)}
            name="titleUa"
            className={styles.formInput}
            placeholder=" Введіть заголовок українською"
          />
        </label> 
        <label htmlFor="titleUa" className={styles.formLabel}>
          Введіть заголовок En*
          <br />
          <textarea
            type="text"
            value={competitionTitleEn}
            onChange={(e)=> handleInputs(e,setCompetitionTitleEn)}
            name="titleUa"
            className={styles.formInput}
            placeholder=" Введіть заголовок англійською"
          />
        </label>
        <label htmlFor="backgroudImage" className={styles.formLabel}>
          Виберіть фонове зображення*
          <br />
          <input
            type="file"
            onChange={(e)=>handleSelectedFile(e,setCompBackgroundImage)}
            name="backgroundmage"
            className={styles.formInputImage}
          />
        </label>
        <label htmlFor="rases" className={styles.formLabel}>
          Виберіть файл для протоколів (pdf)*
          <br />
          <input
            type="file"
            onChange={(e)=>handleSelectedFile(e,setRases)}
            name="backgroundmage"
            className={styles.formInputImage}
          />
        </label>
        <MenuButton text={"Додати"} onClick={handleCompetitionContent}/>
          </div>       
  )
}

export default  CompetitionEditor