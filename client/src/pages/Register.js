import React, { useRef, useState, useEffect } from "react";
import { Check, Close, Info } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import axios from "../axios";
import "./Home.css";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{5,25}$/;
const PASSWORD_REGEX =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,30}$/;
const Register = ({ setDisplay, closeLogin }) => {
	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState("");
	const [validName, setValidName] = useState(false);
	const [userFocus, setUserFocus] = useState(false);

	const [password, setPassword] = useState("");
	const [validPassword, setValidPassword] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);

	const [matchPassword, setMatchPassword] = useState("");
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	const [errMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setValidName(USER_REGEX.test(user));
	}, [user]);

	useEffect(() => {
		setValidPassword(PASSWORD_REGEX.test(password));
		setValidMatch(password === matchPassword);
	}, [password, matchPassword]);

	useEffect(() => {
		setErrMsg("");
	}, [user, password, matchPassword]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const username = USER_REGEX.test(user);
		const passWord = PASSWORD_REGEX.test(password);
		console.log(passWord);
		if (!username || !passWord) {
			setErrMsg("Invalid attempt to enter");
			return;
		}
		try {
			const response = await axios.post(
				"/api/register",
				JSON.stringify({ user, passWord }),
				{
					headers: {
						"Content-Type": "application/json",
					},
					withCredentials: true,
				}
			);
			console.log(response?.data);
			console.log(response?.accessToken);
			console.log(JSON.stringify(response));
			setSuccess(true);
			setUser("");
			setPassword("");
			setMatchPassword("");
		} catch (err) {
			console.error(err);
			if (!err?.response) {
				setErrMsg("No server response");
			} else if (err.response?.status === 409) {
				setErrMsg("Username taken");
			} else {
				setErrMsg("Registration failed");
			}
			errRef.current.focus();
		}
	};
	return (
		<Box
			sx={{
				width: 350,
				height: "auto",
				backgroundColor: "#9dd50f",
				padding: "50px",
			}}
		>
			{success ? (
				<section>
					<h1>Success!</h1>
					<p>
						<span className="line">
							<button
								onClick={() => {
									setDisplay("signIn");
								}}
							>
								Sign In
							</button>
						</span>
					</p>
				</section>
			) : (
				<section>
					<p
						ref={errRef}
						className={errMsg ? "errmsg" : "offscreen"}
						aria-live="assertive"
					>
						{errMsg}
					</p>
					<h1>Register</h1>
					<form onSubmit={handleSubmit}>
						<label htmlFor="username">
							Username:
							<span className={validName ? "valid" : "hide"}>
								<Check />
							</span>
							<span className={validName || !user ? "hide" : "invalid"}>
								<Close />
							</span>
						</label>
						<input
							type="text"
							id="username"
							ref={userRef}
							autoComplete="off"
							required
							value={user}
							onChange={(e) => setUser(e.target.value)}
							aria-invalid={validName ? "false" : "true"}
							aria-describedby="uidnote"
							onFocus={() => setUserFocus(true)}
							onBlur={() => setUserFocus(false)}
						/>
						<p
							id="uidnote"
							className={
								userFocus && user && !validName ? "instructions" : "offscreen"
							}
						>
							<Info />
							6 to 25 characters.
							<br />
							Must begin with a letter.
							<br />
							Letters, numbers, underscores, hyphens allowed
						</p>
						<br />
						<label htmlFor="password">
							Password:
							<span className={validPassword ? "valid" : "hide"}>
								<Check />
							</span>
							<span className={validPassword || !password ? "hide" : "invalid"}>
								<Close />
							</span>
						</label>
						<input
							type="password"
							id="password"
							required
							onChange={(e) => setPassword(e.target.value)}
							aria-invalid={validPassword ? "false" : "true"}
							aria-describedby="passwordNote"
							onFocus={() => setPasswordFocus(true)}
							onBlur={() => setPasswordFocus(false)}
						/>
						<p
							id="passwordNote"
							className={
								passwordFocus && !validPassword ? "instructions" : "offscreen"
							}
						>
							<Info />
							8 to 30 characters.
							<br />
							Must include uppercase and lowercase letters, a number and a
							special character.
							<br />
							Allowed special characters:{" "}
							<span aria-label="exclamation mark">!</span>
							<span aria-label="at symbol">@</span>
							<span aria-label="hashtag">#</span>
							<span aria-label="dollar sign">$</span>
							<span aria-label="percent">%</span>
						</p>
						<br />
						<label htmlFor="confirm_password">
							Confirm Password:
							<span className={validMatch && matchPassword ? "valid" : "hide"}>
								<Check />
							</span>
							<span
								className={validMatch || !matchPassword ? "hide" : "invalid"}
							>
								<Close />
							</span>
						</label>
						<input
							type="password"
							id="confirm_password"
							onChange={(e) => setMatchPassword(e.target.value)}
							required
							aria-invalid={validMatch ? "false" : "true"}
							aria-describedby="confirmnote"
							onFocus={() => setMatchFocus(true)}
							onBlur={() => setMatchFocus(false)}
						/>
						<p
							id="confirmnote"
							className={
								matchFocus && !validMatch ? "instructions" : "offscreen"
							}
						>
							<Info />
							Password does not match.
						</p>
						<br />
						<Button
							disabled={
								!validName || !validPassword || !validMatch ? true : false
							}
						>
							Sign Up
						</Button>
					</form>
					<p>
						Already registered? <br />
						<span className="line">
							<Button
								onClick={() => {
									setDisplay("signIn");
								}}
							>
								Sign In
							</Button>
							<Button onClick={closeLogin}>Cancel</Button>
						</span>
					</p>
				</section>
			)}
		</Box>
	);
};

export default Register;
