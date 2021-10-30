import React from "react"

import s from "./buttons.module.scss"

const UniButton=({ toggleFoo, isDelete}) =>{
    const styles= [s.uniButton]

    isDelete? styles.push(s.delete): styles.push(s.edit);

    return(
        <div className={styles.join(" ")} onClick={toggleFoo}>
        </div>
    )
}

export default UniButton