// Modules used
const express= require('express')
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');


// load environment variables
dotenv.config({ path: './public/js/backend/config/config.env' });


const app=express()
//const bodyParser=require('body-parser')
const userRoute=require('./public/js/backend/routes/userRoutes')

const restaurantsRoute=require("./public/js/backend/routes/restaurantRoute")
//const cartRoute=require('./public/js/backend/routes/cartRoute')

// end of modules used


//middle wares used

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Set static folder
app.use(express.static(path.join(__dirname)));
//app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs')


// Enable cors
app.use(cors());


// end of middleware


// routes callback
app.use(userRoute)

app.use(restaurantsRoute)
//app.use(cartRoute)

app.use('/api/v1/stores', require('./public/js/backend/routes/stores'));

// End of routes callback

// server running
var listener = app.listen(3000, function(){
    console.log('Up and running on http://localhost:'+ listener.address().port);
});

//end of server running