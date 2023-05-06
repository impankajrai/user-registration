const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
	name:String,
	age:String,
	gender:String,
	mobile:String,
	idType:String,
	govtId:String,
	guardianLabel:String,
	guardianName:String,
	email:String,
	emergencyContactNumber:String,
	address:String,
	state:String,
	city:String,
	country:String,
	pincode:String,
	occupation:String,
	religion:String,
	maritalStatus:String,
	bloodGroup:String,
	nationality:String,
});

module.exports = mongoose.model("user", UserSchema);
