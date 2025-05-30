import mongoose from "mongoose";

const userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		 minlength: 3,
        maxlength: 15,
		trim:true
	},
	email: {
		type: String,
		required: true,
		unique: true,
       maxlength: 15,
	   trim:true
	},
	password: {
		type: String,
		required: true,
		trim:true
	},
	image: {
		type: String,
		default: "",
	},
	searchHistory: {
		type: Array,
		default: [],
	},
});

export const User = mongoose.model("User", userSchema);
