import React, { useContext } from "react";

import { langContext } from "../AppLayout";

import s from "./hero.module.scss"

const Hero = ()=>{
    const text = useContext(langContext)
    return(
        <div className={s.heroContainer}>
            <div className={s.heroDescr}>
                <p className={s.tag}>#zakhidnyiviter</p>
                <p className={s.heroText}>{text.heroText}</p>
            </div>
        </div>
    )
}
export default Hero;