const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const postRoutes = require('./routes/posts');
const admincatRoutes = require('./routes/admincat')

// Shavinda
const postRoutesP = require('./routes/product_posts');
const postRoutesC = require('./routes/categoryPosts');
const postRoutesS = require('./routes/supPosts');

app.use(bodyParser.json());
app.use(cors());
const feedbackRouter = require("./routes/feedback.js");

 

app.use(bodyParser.json());
app.options('*', cors());
app.use(cors({
  origin: '*',
  credentials: true,
    exposedHeaders: ["X-Total-Count"],
    allowedHeaders: ["X-Total-Count"],
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
  }));
app.use(postRoutes);
app.use(admincatRoutes);
app.use("/feedback",feedbackRouter);

//  nuwanthika
var driverRouter = require('./routes/driver');
var vehicleRouter = require('./routes/vehicle');
var deliveryRouter = require('./routes/delivery');
var orderRouter = require('./routes/order');
app.use('/api/drivers', driverRouter);
app.use('/api/vehicles', vehicleRouter);
app.use('/api/deliveries', deliveryRouter);
app.use('/api/orders', orderRouter);
//  nuwanthika

// Shavinda
app.use(postRoutesP);
app.use(postRoutesC);
app.use(postRoutesS);


const PORT =8000;

//const DB_URL ='mongodb+srv://twg:twg123@mernapp.zc2p7.mongodb.net/mernCrud?retryWrites=true&w=majority';
const DB_URL='mongodb+srv://sliit:sliit123@itpcluster.fpcc4.mongodb.net/furnitureDB?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:  true
})
.then(()=>{
    console.log('DB is connected');
})
.catch((err)=>console.log('DB connection err',err));


app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});

