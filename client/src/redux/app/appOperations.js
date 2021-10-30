import appActions from "./appActions";
import langActions from "./appActions";

const setLanguage = lang=> dispatch=>{
  dispatch(langActions.toggleLanguage(lang))
}
const setModalItem = item=>dispatch=>{
  dispatch(langActions.setModalItem(item))
}

const setMessage = message => dispatch=>{
  dispatch(appActions.setMessage(message))
}

// eslint-disable-next-line import/no-anonymous-default-export
export default 
{setLanguage, 
  setModalItem,
  setMessage,
}