import axios from 'axios';

import  {authActions} from './index';

import appActions  from '../app/appActions';

const baseURL = 'http://localhost:3002/auth';

const token = {
    set(token) {
      axios.defaults.headers.common.token = `${token}`;
    },
    unset() {
      axios.defaults.headers.common.token = '';
    },
  };

  const login = credentials => async dispatch => {
    dispatch(authActions.loginRequest());
    try {
      const { data } = await axios.post(`${baseURL}/login`,credentials);
      token.set(data);
      data && dispatch(authActions.loginSuccess(data)) && dispatch(appActions.setMessage("Успішний вхід в систему"))

      
      axios.defaults.headers.common['token'] = (data);
    } catch (error) {
      dispatch(authActions.loginError(error.response.data));
      dispatch(appActions.setMessage("Вхід не виконано"))
    }
  };

  const currentUser= token=> async dispatch=>{
    dispatch(authActions.currentUserRequest())
    try{
      const { data } = await axios.post(`${baseURL}/currentUser`,{token});
    data? dispatch(authActions.loginSuccess(data)): dispatch(authActions.currentUserRejected())
    if(data) {axios.defaults.headers.common['token'] = (data);}
  }catch(error){
    // dispatch(authActions.currentUserError(error));
    console.error(error);
  }  
  }

  // eslint-disable-next-line import/no-anonymous-default-export
export default {
  login, 
  currentUser,
};