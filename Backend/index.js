const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

var cors = require('cors');
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require("./config/config");
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/pets?authSource=admin`;

const userRouter = require("./routes/userRoutes");
const petRouter = require("./routes/petRoutes");

const app = express()

const connectWithRetry = () => {
    mongoose.connect(
        mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => console.log("Successfully connected to MongoDB!"))
        .catch((e) => {
            console.error(e);
        });
}

connectWithRetry();

app.use(express.json());
var corsOptions = {
    origin: '*'
  }

app.get("/", (req, res) => {
    res.send("<h5>Sync testing!!</h5>")
});

//app.use("/api/v1/loginusers",cors(corsOptions),userLoginRouter)
app.use("/api/v1/users",cors(corsOptions),userRouter)
app.use("/api/v1/users/authenticate",cors(corsOptions),userRouter)

app.use("/api/v1/pets",cors(corsOptions),petRouter)

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`))