import React from 'react';
import {useSelector} from "react-redux"
import Header from './Header/Header';
import Footer from "./Footer/Footer"

import styles from "../main.module.scss"

import uaText from "../lang/ua.json"
import enText from "../lang/en.json"

export const langContext = React.createContext()

export default function AppLayout ({ children }) {
const currentLang= useSelector(state=>state.app.language)
const text = currentLang==="Ua"? uaText:enText;
  return (
    <div className={styles.app}>
      <div className={styles.appContainer}>
      <langContext.Provider value={text}>
      <Header />
      <div className={styles.appContentContainer}>
      {children}
      </div>
      <Footer/>
      </langContext.Provider>
      </div>
     
    </div>
  );
};



