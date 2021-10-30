import React, {useState} from "react"
import { useSelector  } from "react-redux"

import {Link} from "react-router-dom"
import Login from "../Login/Login"

import s from "./footer.module.scss"

const Footer=()=>{
    const [isLogin, setIslogin]= useState(false)
    const isLogged = useSelector(state=>state.auth.isLogged)

    const toSwitch = (toggle, setIsTrue) =>{
        const toggledItem = toggle ? false : true;
        setIsTrue(toggledItem);
      }
    return(
        <div className={s.footer}>
            <ul className={s.footerMenu}>
                <li className={s.footerMenuItem}>
                    <a href='https://uk-ua.facebook.com/'>
                        <div className={ s.facebook}></div>
                    </a>
                </li>
                <li className={s.footerMenuItem}>
                    <a href='https://instagram.com/zakhidnyiviter?utm_medium=copy_link'>
                        <div  className={s.instagram}></div>
                    </a>
                </li>
                <li className={s.footerMenuItem} onClick={e=>toSwitch(isLogin, setIslogin)}>
                        <div className={s.login}></div>
                </li>
                <li className={s.footerMenuItem}>
                    
                        <div className={s.mail}></div>
                   
                </li>
                {isLogged &&  <li className={s.footerMenuEditor}>
                    <Link  to={{
          pathname: `/editor`,
        }}><div className={s.edit}></div></Link>
                </li>}
            </ul>
            {isLogin && <Login onClose={setIslogin}/>}
            <p className={s.footerLable}>{`Created by Igor Verchyk <igorverchyk@gmail.com>`}</p>
        </div>
    )
}
export default Footer;