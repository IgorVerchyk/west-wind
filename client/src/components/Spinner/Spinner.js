import React from "react";
import Loader from "react-spinners/PuffLoader"
import s from "./spinner.module.scss"

function Spinner (size){
    return(
        <div className={s.spinnerSection}>
             <div className={s.spinnerContainer}>
             <Loader size ={size} color={`rgba(73, 126, 233, 0.79)`}/>
        </div>
        </div>
       
       
    )
}
export default Spinner;