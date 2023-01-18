const {postSell,getSellItems}  =require("../../model/buysell/buysell.model")

// const httpGetMarketPrice =async (req,res)=>{
  
//   const place=req.params.place;
//      const result = await getMarketPrice(place);
//      res.status(200).json(result);
// }

// const httpPostMarketPrice=async (req,res)=>{
//   const data = req.body;
//   console.log(data);
//   const result = await postMarketPrice(data);
//   res.status(201).json(result);
// }
const httpSell=async (req,res)=>{
  //const data = req.body;
  //console.log(req.query);
  const data = req.body;
 // const result = {name:"dilep"};
 const result = await postSell(data);
  res.status(201).json(result);
 
}
const httpgetSell=async (req,res)=>{
 const result = await getSellItems();
  res.status(201).json(result);
 
}


module.exports={
  httpSell,httpgetSell
}