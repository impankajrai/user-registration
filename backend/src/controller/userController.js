const user = require("../models/user");
const User = require("../models/user");

//registration==========================================================
module.exports.registration = async (req, res) => {
	const {
		name,
		age,
		gender,
		mobile,
		idType,
		govtId,
		guardianLabel,
		guardianName,
		email,
		emergencyContactNumber,
		address,
		state,
		city,
		country,
		pincode,
		occupation,
		religion,
		maritalStatus,
		bloodGroup,
		nationality,
	} = req.body;

    const insert = await User.create(req.body);
    res
    .status(200)
    .json({ success: true, message: "user registerd successfully", user:insert});
};

//get all data ====================================================================================================
module.exports.getData = async (req, res) => {
	const response = await User.find();
    if(response){
		res
		.status(200)
		.json({ success: true, message: "User Details Fetch Successfully", users:response});
	}else{
		res
		.status(401)
		.json({ success: false, message: "Something went wrong"});
	}
};
