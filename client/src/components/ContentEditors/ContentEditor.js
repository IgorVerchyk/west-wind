import React, {useState} from "react";

import ProfileEditor from "./ProfileEditor"
import EventEditor from "./EventEditor";
import MenuButton from "../Buttons/MenuButton";

const ContentEditor=()=>{
    const [profileEditor, setIsProfileEditor]= useState(true)
    const toggler =(item, setItem)=>{
       item? setItem(false): setItem(true)
    }
    return(
        <>
        <MenuButton text={profileEditor?"Профіль":"Новина"} onClick={e=>toggler(profileEditor, setIsProfileEditor)}/>
        {profileEditor && <ProfileEditor/>}
         
         {!profileEditor &&<EventEditor/>}
        </>
    )
}

export default ContentEditor;