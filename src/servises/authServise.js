const repository = require("../repository/club");
const sessionModel =require('../models/sessionModel')
const USER = process.env.USER
const PASSWORD = process.env.PASSWORD

exports.login= async({ user, password })=> {
    if (!user || !password) {
      return null;
    }
   if(user===USER&& password===PASSWORD){
    const result= await  repository.createData({date:Date.now()},sessionModel) 
    return result._id
   }
   return null
  }
  exports.logout= async(id)=> {
    return await this.repositories.users.updateToken(id, null);
  }

  exports.currentUser = async({token})=>{
    const currentSession = await repository.findData(token, sessionModel)
    if(!currentSession){
      return null
    }
    if(currentSession.date+3600000 > Date.now()){return token }
    else{ return null}  
  }