const {Router} = require("express")
const {httpSell,httpgetSell} =require('./buysell.controller')
const buySellRouter = Router();

buySellRouter.post('/sell',httpSell);
buySellRouter.get('/getsell',httpgetSell);
// marketRouter.post('/postmarket',httpPostMarketPrice);


module.exports = {
    buySellRouter     
}