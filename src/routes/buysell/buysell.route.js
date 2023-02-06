const {Router} = require("express")
const {httpSell,httpgetSell,httpDeleteSell} =require('./buysell.controller')
const buySellRouter = Router();

buySellRouter.post('/sell',httpSell);
buySellRouter.get('/getsell',httpgetSell);
buySellRouter.delete('/deletesell/:id',httpDeleteSell);
// marketRouter.post('/postmarket',httpPostMarketPrice);


module.exports = {
    buySellRouter     
}