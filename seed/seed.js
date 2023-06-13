const mongoose = require('mongoose');
const DroneModel = require('../models/DroneModel');
const data = require('./data');

mongoose.connect('mongodb://127.0.0.1:27017/dji-data');

const db = mongoose.connection;
db.on("error", console.error.bind(console,'connection error:'));
db.once("open", () => {
    console.log('Database Connected');
});

const seedDB = async () => {
    await DroneModel.deleteMany({});
    for (let i = 0; i<data.length ; i++) {
        const drone = new DroneModel( {
            NO: data[i].NO,
            MODEL: data[i].MODEL,
            LAUNCH_DATE: data[i].LAUNCH_DATE,
            VERSION: data[i].VERSION,
            PRICE_OF_NEW: data[i].PRICE_OF_NEW,
            ELAPSED_MONTHS: data[i].ELAPSED_MONTHS,
            CURRENT_MARKET_VALUE: data[i].CURRENT_MARKET_VALUE,
        })
        await drone.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})