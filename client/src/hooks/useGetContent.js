import { useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import { authOperations } from "../redux/auth"

import { clubOperations } from "../redux/club"

const useGetContent = (link)=>{
    const isLoggedIn= useSelector(state=>state.auth.isLogged)
    const dispatch= useDispatch();

     useEffect(()=>  {
         async function getContent(){
              await dispatch(clubOperations.getContent(`${link}`)) 
              if(isLoggedIn){await dispatch(authOperations.currentUser(isLoggedIn))}
         }
         getContent() 
    },[dispatch,isLoggedIn, link])

}

export default useGetContent;