// require('dotenv').config({path: './env'})
import connectDB from "./db/index.js";
import dotenv from "dotenv"
const port = process.env.PORT || 8000

dotenv.config({
    path: './env'
})

app.on("Error", (err) => {
    console.log("Error: ", err);
    throw err
})

connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`Server is running at port : ${port}`);
    })
})
.catch((err)=> {
    console.log("MongoDB connection failed! ", err);
})


/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()
*/