import mongoose from "mongoose";

const userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		 minlength: 3,
        maxlength: 20,
	
	},
	email: {
		type: String,
		required: true,
		unique: true,
       maxlength: 30,
	 
	},
	password: {
		type: String,
		required: true,
		
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
