const express = require("express");
const cors = require ('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

const mongoose =require("mongoose");
mongoose.connect("").then(() => {
    console.log("Connected");
})
.catch(() => {
    console.log("failed");
});
 app.listen(8000, () =>{
    console.log("Port Connected");
 })