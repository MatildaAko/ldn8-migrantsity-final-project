import { Button, Modal } from "@mui/material";
import React, { useState } from "react";
import Register from "./Register";
import SignIn from "./SignIn"

const Login = () => {
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState("");
  const openLogin = () => { setOpen(true); setDisplay("register")};
	const closeLogin = () => setOpen(false);
	return (
		<div>
			<Button onClick={openLogin}>Login</Button>
      <Modal
        open={open}
        onClose={closeLogin}
      >
        {display === "register" ? <Register setDisplay={setDisplay} /> : <SignIn setDisplay={setDisplay} /> }
			</Modal>
		</div>
	);
};

export default Login;

