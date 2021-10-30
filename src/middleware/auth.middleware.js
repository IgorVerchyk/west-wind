const repository = require("../repository/club")
const sessionModel = require('../models/sessionModel')

module.exports = async (req, res, next) => {
 
  try {
    const token = req.headers.token
    if (!token) {
      return res.status(401).json({ message: "No Access" });
    }
    const currentSession = await repository.findData(token,sessionModel)

    if(!currentSession){
      return res.status(401).json({ message: "No Access" })
    }
    if(currentSession.date+3600000 > Date.now()){ next()}else{ res.status(401).json({message:"Token deprecated"})}
    
  } catch (e) {
    res.status(401).json({ message: "No Access" });
  }
};