const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');


// connect to datbase
mongoose.connect(config.database);

//onconnection
mongoose.connection.on('connected', () =>{
    console.log('connected to database ' + config.database);
});

//error
mongoose.connection.on('error', (err) =>{
    console.log('database error' + err);
});

const app = express();
const users = require('./routes/users');

const port  = process.env.port || 8080;
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
app.use('/users', users);

app.get('/', (req,res) => {
    res.send('invalid enpoint');
});

app.get('*',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(port,() => {
    console.log('server started on port ' + port);
});