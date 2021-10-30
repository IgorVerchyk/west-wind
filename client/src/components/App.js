import React, {useState, useEffect, Suspense} from "react"
import AppLayout from "./AppLayout"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from "../routes"
import Spinner from "../components/Spinner/Spinner"
import Modal from "../components/Modal/Modal"
import Message from "./Message/Message";
import { useSelector } from "react-redux";




function App() {
  const [isModal, setIsModal]= useState(false)
  const [message, setMessage]=useState(null)
  const modalItem = useSelector(state=>state.app.modalItem)
  const messageSelector = useSelector(state=>state.app.message)
  useEffect(()=>{
   modalItem?setIsModal(true):setIsModal(false)
   
  },[modalItem])
  useEffect(()=>{
    messageSelector?setMessage(true):setMessage(false)
    
   },[messageSelector])
  return (
    <BrowserRouter>
     <AppLayout>
           <Suspense fallback={Spinner(100)}>
             {isModal&& <Modal/>}
             {message && <Message/> }
             <Switch>
              {routes.map(route =>
               <Route key = {route.label} path= {route.path} exact component={route.component}/>
              )}
            </Switch>
           
           
          </Suspense>
    </AppLayout>
    </BrowserRouter>
   
  );
}

export default App;
