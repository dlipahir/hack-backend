const mongoose = require("mongoose");

const buySellSchema = new mongoose.Schema({
  cropType: String,
  cropName: String,
  quantity: String,
  price: String,
  description: String,
  district: String,
  taluka: String,
  villageCity: String,
  contactNumber: String,
  image: String,
  sellerId:String
});

module.exports = mongoose.model("buysell", buySellSchema);
