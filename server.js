const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDb = require('./config/connectDb');
const path = require('path');
// config .env file

dotenv.config();

// database connect

connectDb();

// rest object 
const app = express();

// middlewares

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
//user routes
app.use("/api/v1/users", require("./routes/userRoute"));
//transections routes
app.use("/api/v1/transections", require("./routes/transectionRoutes"));

// static file
app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

const PORT = 8080 || process.env.PORT

// listen server

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.underline.yellow.bold);
})

