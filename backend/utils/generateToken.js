import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars.js";

export const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: "24h" });

	res.cookie("jwt-netflix", token, {
		maxAge: 24 * 60 * 60 * 1000, // 24 hours in ms
		httpOnly: true, // prevents XSS
		sameSite: "strict", // prevents CSRF
		secure: ENV_VARS.NODE_ENV !== "development",
	});

	return token;
};
