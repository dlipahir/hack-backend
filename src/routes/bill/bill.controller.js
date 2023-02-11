const { postBill, getBills,getBill } = require("../../model/bill/bill.model");

const httpPostBill = async (req, res) => {
  const data = req.body;
  console.log(data);
  const result = await postBill(data);
  res.status(201).json(result);
};
const httpGetBills = async (req, res) => {
  const result = await getBills();
  res.status(200).json(result);
};
const httpGetBill = async (req, res) => {
    const id=req.params.id;
  const result = await getBill(id);
  res.status(200).json(result);
};

module.exports = {
  httpPostBill,
  httpGetBill,
  httpGetBills
};
