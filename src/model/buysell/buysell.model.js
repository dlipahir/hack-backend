const buySellDB =require('./buysell.mongo')

 const postSell=async (data)=>{
    console.log("creating sell item",data);
    const result = await buySellDB.updateOne(data,data,{upsert:true});
     return result; 
}
 const getSellItems=async ()=>{
    console.log("creating sell item");
    const result = await buySellDB.find({},{"__v":0});
     return result; 
}

//  const getLandByNameDetails=async (data)=>{
//     const {district,taluka,village,newSurveyNumber} = data;
//      const result = await landDb.findOne({district:district,taluka:taluka,village:village,newSurveyNumber:newSurveyNumber},{"_id":0,"__v":0});
//     return result; 
     
// }

//  const postLandDetails=async(body)=>{
//     console.log("creating land");
//     const result = await landDb.updateOne(body,body,{upsert:true});
//      return result;
// }

module.exports={postSell,getSellItems}