const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

//global variables
let items = ['Buy food', 'Cook food', 'Eat food'];

app.get('/', function(req, res){

    const day = date.getDate();

    res.render('list', {day: day, newListItems: items}) // EJS function call
})

//send information from the index.ejs when information is 'posted'
app.post('/', function(req, res){
    const item = req.body.newItem; // comes from bodyParser
    items.push(item);

    res.redirect('/');
})

app.listen(process.env.PORT || 3000, function(){
    console.log('Server started on port 3000');
})

