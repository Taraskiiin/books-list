const express = require("express");
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const server = require("http").Server(app)
const Routesbookapp = require('./routes/Routesbookapp')
const PORT = process.env.PORT || 3000
app.use(cors());
app.use(express.json());
app.use(Routesbookapp);

async function start() {
    try {
        await mongoose.connect('mongodb+srv://taraskiiin:1q2w3e4r@cluster0.iswec.mongodb.net/book-app', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log("Server was started!");
        });
    }
    catch (e) {
        console.log(e);
    }
}

start ();