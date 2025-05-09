const express = require('express'); 
const connectDB = require('./db');
const NotesController = require('./src/controllers');
const cors = require('cors'); 

const app = express(); 
app.use(express.json());
app.use(cors()); 
connectDB();
// Defining routes
app.get('/get',NotesController.Getdata); 
app.post('/create',NotesController.Createdata); 
app.put('/notes/:id',NotesController.Updatedata); 
app.delete('/notes/:id',NotesController.deletedata);

// Starts the server
const PORT = process.env.PORT || 5000;
app.listen(PORT);
module.exports = app;