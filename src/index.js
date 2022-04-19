const express = require('express');

const app = express();

const connect = require('./config/db')

require('dotenv').config()

const cors=require('cors')

const port = process.env.PORT || 6000

const flatcontroller=require("./controller/flat.controller")

const residentcontroller=require("./controller/resident.controller")

let {register,login} = require("./controller/authcontroller");
app.use(express.json())

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

app.use(cors(corsOptions))



app.use("/flat",flatcontroller)

app.use("/resident",residentcontroller)


app.post("/register", register);

app.post("/login",login);

app.listen(port,async () => {

    await connect()

    console.log(`listening on ${port}`)
})