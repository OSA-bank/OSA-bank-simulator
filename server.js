const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//const db = require('./db/database')

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/../client/public'));

const uri = process.env.URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connected')
});


// here you require the router 
// then use the router ex:
// const userRouter = require('./routes/user)
//app.use('/user', userRouter)


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});