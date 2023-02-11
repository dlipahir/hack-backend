const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  farmId: String,
  bills: [
    {
      landTitle: {
        type: String,
        required: true,
      },
      year: {
        type: String,
        required: true,
      },
      cropName: {
        type: String,
        required: true,
      },
      quintity: {
        type: String,
        required: true,
      },
      unit: {
        type: String,
        required: true,
      },
      totalPrice: {
        type: String,
        required: true,
      },
      cropType: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("bill", billSchema);
