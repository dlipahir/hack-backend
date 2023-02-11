const billDB = require("./bill.mongo");
const farmerDb = require("../allData/alldata.mongo");

const postBill = async (data) => {
  // const user = await billDB.find({farmId:data.farmId},{__v:0,_id:0}).count();
  //if(user)
  const user = await farmerDb
    .find({ farmId: data.farmId }, { __v: 0, _id: 0 })
    .count();
  console.log(user);
  if (user) {
    const result = await billDB.updateOne(
      { farmId: data.farmId },
      { $addToSet: { bills: data.bills } },
      { upsert: true }
    );
    return result;
  }
  return { error: "farmer not regstered" };
};

const getBills = async () => {
  //const result = await farmerdb.find({farmId:data.farmId},{__v:0,_id:0}).count();

  const result = await billDB
    .find();
  return result;
};
const getBill = async (id) => {
  //const result = await farmerdb.find({farmId:data.farmId},{__v:0,_id:0}).count();

  const result = await billDB
    .find({farmId:id});
  return result;
};

module.exports = { postBill, getBills,getBill };
