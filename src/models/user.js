const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    email: { type: String, required: true },
    profileImages: { type: String, required: false },
    Mobile: { type: String, required: true },
    password: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  let hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});
userSchema.methods.passwordMatch = function (password) {
  return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model("user", userSchema);
