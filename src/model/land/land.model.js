const landDb =require('./land.mongo')

 const getLandDetails=async (UPIN)=>{
     const result = await landDb.findOne({UPIN:UPIN},{"_id":0,"__v":0});
    return result; 
}

 const getLandByNameDetails=async (data)=>{
    const {district,taluka,village,newSurveyNumber} = data;
     const result = await landDb.findOne({district:district,taluka:taluka,village:village,newSurveyNumber:newSurveyNumber},{"_id":0,"__v":0});
    return result; 
     
}

 const postLandDetails=async(body)=>{
    console.log("creating land");
    const result = await landDb.updateOne(body,body,{upsert:true});
     return result;
}

module.exports={getLandDetails,postLandDetails,getLandByNameDetails}