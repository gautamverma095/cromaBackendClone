const mongoose = require("mongoose");
module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://VaibhavDasss:V2480d@onenetwork.ozbbj.mongodb.net/S3D1?authSource=admin&replicaSet=atlas-41l93k-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"
  );
};
