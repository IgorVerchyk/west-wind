const clubServise = require('../servises/clubServise');



exports.getContent = async (req, res) => { 
    try {
         const eventsRes = await clubServise.getContent("events");
         const competitionsRes = await clubServise.getContent("competitions");
         const club = await clubServise.getContent("club");
         const events = eventsRes.reverse()
         const competitions= competitionsRes.reverse()
         const data ={events, competitions, club }
         res.status(201).json(data);
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ message: 'Something wrong. Please try again later' });
    };
  };
  
  exports.createContent = async (req, res) => {
    const { link } = req.body;
    try {
      if(!link){
        return res.status(400).json({massege:"Wrong request type"})
      }
      await clubServise.createContent(req)
      const eventsRes = await clubServise.getContent("events");
      const competitionsRes = await clubServise.getContent("competitions");
      const club = await clubServise.getContent("club");
      const events = eventsRes.reverse()
      const competitions= competitionsRes.reverse()
      const data ={events, competitions, club }
      res.status(201).json(data);
    } catch (err) {
      console.log(err);
      res
          .status(500)
          .json({ message: 'Something wrong. Please try again later' });
    };
  };
 
  exports.removeContent = async (req, res) => {
  
    const { id, link } = req.query;
    try {
      if (!id) {
        return res.status(400).json({ message: "Wrong request type" });
      }
      else if (!link){
        return res.status(400).json({massege: "Wrong request type"})
      }
      await clubServise.removeContent(id, link)
      const eventsRes = await clubServise.getContent("events");
      const competitionsRes = await clubServise.getContent("competitions");
      const club = await clubServise.getContent("club");
      const events = eventsRes.reverse()
      const competitions= competitionsRes.reverse()
      const data ={events, competitions, club }
      res.status(201).json(data);
    } catch (err) {
      console.log(err);
      res
          .status(500)
          .json({ message: 'Something wrong. Please try again later' });
    };
  };
 