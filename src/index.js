const express = require('express');

const app = express();

const connect = require('./config/db')

require('dotenv').config()

const cors=require('cors')

const port = process.env.PORT || 6000

app.use(express.json())

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

app.use(cors(corsOptions))


app.listen(port,async () => {

    await connect()

    console.log(`listening on ${port}`)
})