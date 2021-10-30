const authService = require("../servises/authServise")


exports.login = async (req, res) => {
    const { user, password } = req.body;
    console.log(req.body)
    try {
      const result = await authService.login({ user, password });
      if (!result) {
        return res.status(401).json({message:"Invalid creadentials"});
      }
     return res.status(201).json(result);
    } catch (e) {
    }
  };

  exports.currentUser = async (req, res) => {
    const {token}= req.body
    try {
      const result = await authService.currentUser({token});
      if (!result) {
        return res.status(201).json(result);
      }
     return res.status(201).json(result);
    } catch (e) {
      return res.status(400).json({message:"woops, something is wrong"})
    }
  }