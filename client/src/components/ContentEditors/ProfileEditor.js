import React, {useState, useCallback} from "react"
import { useDispatch } from "react-redux"

import { clubOperations } from "../../redux/club"

import MenuButton from "../Buttons/MenuButton"

import styles from "./editors.module.scss"


const ProfileEditor =()=>{
    const [nameUa, setUaName]= useState('')
    const [nameEn, setEnName]= useState('')
    const [avatar, setAvatar]= useState('')
    const [uaDescription, setUaDescription]= useState('')
    const [enDescription, setEnDescription]= useState('')
    const [isOuner, setIsOuner]= useState(false)
    const [error, setError]=useState(false)

    const handleInputs=(e, handleInput)=>{
        handleInput(e.target.value)
    }

    const handleSelectedFile=(e,handleInput)=>{
        handleInput(e.target.files)
     }

     const onSwitch = (toggle, setIsToggle) =>{
        const toggledItem = toggle ? false : true;
        setIsToggle(toggledItem);
      }

    const dispatch = useDispatch()

    const handleClubSubmit= useCallback(e=>{
        e.preventDefault();
        const link = "club"
        const profile = {nameEn, nameUa, avatar, uaDescription, enDescription, isOuner}
        const body = {link, profile}
  
        if(nameEn ===""){ setError(true)}
        else if(nameUa ===""){ setError(true); return}
        else if(avatar ===""){ setError(true); return}
         dispatch(clubOperations.addContent(body)) ;
    },[ dispatch, nameUa, nameEn, avatar, uaDescription, enDescription, isOuner])
    return(
        <>
              <form className={styles.editorForm}>

<h3 className={styles.title}>Профіль</h3>
<label htmlFor="titleUa" className={styles.formLabel}>
Введіть ім`я Ua*
<br />
<textarea
type="text"
value={ nameUa}
onChange={(e)=> handleInputs(e, setUaName)}
name="nameUa"
className={!error ? styles.formInput : styles.error}
placeholder=" Введіть  ім`я українською"
/>
</label> <label htmlFor="titleUa" className={styles.formLabel}>
Введіть ім`я En*
<br />
<textarea
type="text"
value={ nameEn}
onChange={(e)=> handleInputs(e, setEnName)}
name="nameEn"
className={!error ? styles.formInput : styles.error}
placeholder=" Введіть  ім`я англійською"
/>
</label>
<label htmlFor="backgroudImage" className={styles.formLabel}>
Виберіть зображення профіля*
<br />
<input
type="file"
onChange={(e)=>handleSelectedFile(e,setAvatar)}
name="avatar"
className={styles.formInputImage}
/>
</label>
<label htmlFor="titleUa" className={styles.formLabel}>
Опишіть учасника Ua*
<br />
<textarea
type="text"
value={uaDescription}
onChange={(e)=> handleInputs(e, setUaDescription)}
name="deskriptionUa"
className={!error ? styles.formInput : styles.error}
placeholder=" Введіть текст українською"
/>
</label> <label htmlFor="titleUa" className={styles.formLabel}>
Опишіть учасника En*
<br />
<textarea
type="text"
value={ enDescription}
onChange={(e)=> handleInputs(e, setEnDescription)}
name="descriptionEn"
className={!error ? styles.formInput : styles.error}
placeholder=" Введіть текст англійською"
/>
</label>
<label htmlFor="titleUa" className={styles.formLabel}>
Засновник?*
<br />
<input
type="checkbox"
value={isOuner}
onChange={(e)=> onSwitch(isOuner, setIsOuner)}
name="deskriptionUa"
className={!error ? styles.formInput : styles.error}
placeholder=" Введіть текст англійською"
/>
</label>
<MenuButton text={"Завантажити"} onClick={ handleClubSubmit}/>
</form>
        </>
    )
}

export default ProfileEditor