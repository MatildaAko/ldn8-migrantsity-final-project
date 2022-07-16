import { Button, Modal } from "@mui/material";
import React, { useState } from "react";
import Register from "./Register";

const Login = () => {
	const [open, setOpen] = useState(false);
	const openLogin = () => setOpen(true);
	const closeLogin = () => setOpen(false);
	return (
		<div>
			<Button onClick={openLogin}>Login</Button>
      <Modal
        open={open}
        onClose={closeLogin}
      >
				<Register />
			</Modal>
		</div>
	);
};

export default Login;

