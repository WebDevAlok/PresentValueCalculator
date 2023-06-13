const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('strictQuery', true);

const DroneModelSchema = new Schema({
    NO: Number,
    MODEL: String,
    LAUNCH_DATE: String,
    VERSION: String,
    PRICE_OF_NEW: String,
    ELAPSED_MONTHS: Number,
    CURRENT_MARKET_VALUE: String,
})

module.exports = mongoose.model('DroneModel', DroneModelSchema);