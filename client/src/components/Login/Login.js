import React,{useState, useContext, useCallback} from "react";
import { useDispatch } from "react-redux";

import authOperations from "../../redux/auth/authOperations";
import {langContext} from "../AppLayout"

import MenuButton from "../Buttons/MenuButton"

import styles from './login.module.scss'

const Login =({onClose})=>{
 const textContext = useContext(langContext)
 const [password, setPasword]= useState('')
 const [user, setUser]= useState('')
 const [passwordMissed, setPasswordMissed]= useState(false)
 const [userMissed, setUserMissed]= useState(false)

 const handleInputs=(e, handleInput)=>{
    handleInput(e.target.value)
}
const dispatch = useDispatch()
const fetchCredentials = useCallback(e=>{
    // e.preventDefault();
    if (password.length < 3) {return setPasswordMissed(true)}
    if (user.length < 3){ return setUserMissed(true)}
    const credentials ={ user, password}
    setUserMissed(false)
    setPasswordMissed(false)
    dispatch(authOperations.login(credentials) )
    onClose(false)
    },[ dispatch,user,password, onClose]
    )


    return(
        <div className={styles.loginContainer} >
            <div className={styles.close} onClick={e=>onClose(false)}></div>
            <form className={styles.login}>
            <label htmlFor="user" className={passwordMissed? styles.labelError: styles.label}>
          <input
            type="text"
            value={user}
            onChange={(e)=> handleInputs(e,setUser)}
            name="user"
            className={styles.input}
            placeholder={textContext.user}
          />
        </label>
        <label htmlFor="password" className={userMissed? styles.labelError: styles.label}>
          <input
            type="password"
            value={password}
            onChange={(e)=> handleInputs(e,setPasword)}
            name="password"
            className={styles.input}
            placeholder={textContext.password}
          />
        </label>
            </form>
            <MenuButton text={textContext.login} onClick={fetchCredentials}/>
        </div>
    )
}

export default Login;