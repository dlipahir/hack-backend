const {Router} = require("express")
// const {httpGetMarketPrice,httpPostMarketPrice,httpPostMarket} =require('./market.controller')
const {
    httpPostBill,
    httpGetBills,
    httpGetBill,
  } = require("./bill.controller")
const billRouter = Router();

 billRouter.get('/getbills',httpGetBills);
 billRouter.get('/getbill/:id',httpGetBill);
 billRouter.post('/postbill',httpPostBill);


module.exports = {
    billRouter     
}