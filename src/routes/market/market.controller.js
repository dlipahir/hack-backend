const {getMarketPrice,postMarketPrice}  =require("../../model/marketPrice/market.model")

const httpGetMarketPrice =async (req,res)=>{
  
  const place=req.params.place;
     const result = await getMarketPrice(place);
     res.status(200).json(result);
}

const httpPostMarketPrice=async (req,res)=>{
  const data = req.body;
  console.log(data);
  const result = await postMarketPrice(data);
  res.status(201).json(result);
 
}


module.exports={
    httpGetMarketPrice,
    httpPostMarketPrice,
}