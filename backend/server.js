const express = require('express');
const notes = require("./data/notes");
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const app = express();
dotenv.config();
 connectDB();

app.use(express.json());
app.get('/',(req,res) => {
    res.send("API is running")
});
app.get("/api/notes", (req,res)=> { // "is the API endpoint we are trying to hit"
    res.json(notes)
})
// app.get("/api/notes/:id", (req,res)=> {
//     const note = notes.find((n)=> n._id === req.params.id) // it gets the id from the endpoint
// });
 // requests the parameters from the endpoint and returns the parameters object from the endpoint   
// to store passwords we use env file 
app.use('/api/users', userRoutes)
const PORT = process.env.PORT || 3080;
app.listen(PORT,console.log(`server started on ${PORT}`));