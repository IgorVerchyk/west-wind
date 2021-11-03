const express = require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const config = require("./config/default")
const path = require('path')
const mongoose = require('mongoose'); 
const clubRouter = require('./src/routes/club')
const authRouter =require('./src/routes/auth')
const { resolve } = require('path')


const app = express()

app.use(cors());

app.use(express.json({ extended: true }));



app.use(fileUpload({}))

 app.use("/club", clubRouter);
 app.use("/auth", authRouter )

 app.use("/", express.static(path.join(__dirname, 'client', 'build')))
 app.get('*', (req,res)=>{res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))})

const PORT = process.env.PORT || 3001


const server = require('http').Server(app);

async function start() {
    try {
      await  
      mongoose.connect(config.mongo.url, config.mongo.options) && console.log('database connected');
      server.listen(PORT, () =>
        console.log(`Server has been started on port ${PORT}...`),
      );
    } catch (err) {
      console.log('Server Error', err.message);
      process.exit(1);
    };
  };

  start()
