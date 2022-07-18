import React, { useEffect, useRef, useState, useContext } from "react";
import { Box, Button } from "@mui/material";
import AuthContext from "../context/AuthProvider";
import axios from "axios";

const SignIn = ({ setDisplay, closeLogin }) => {
  const { setAuth } = useContext(AuthContext);
	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [errMsg, setErrMsg] = useState("");

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg("");
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser("");
    setPassword("");
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
			<p
				ref={errRef}
				className={errMsg ? "errmsg" : "offscreen"}
				aria-live="assertive"
			>
				{errMsg}
			</p>
			<h1>Sign In</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username:</label>
				<input
					type="text"
					id="username"
					ref={userRef}
					autoComplete="off"
					onChange={(e) => setUser(e.target.value)}
					value={user}
					required
				/>
				<br />
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					id="password"
					onChange={(e) => setPassword(e.target.value)}
					value={[password]}
					required
				/>
				<br />
				<Button>Sign In</Button>
			</form>
			<p>
				Need an account? <br />
				<span className="line">
					<Button
						onClick={() => {
							setDisplay("register");
						}}
					>
						Sign Up
					</Button>
					<Button onClick={closeLogin}>Cancel</Button>
				</span>
			</p>
		</Box>
	);
};

export default SignIn;
