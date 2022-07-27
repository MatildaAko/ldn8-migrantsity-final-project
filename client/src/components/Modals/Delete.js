import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";

const DeleteModal = ({ deleteHandler, item }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const handleYes = () => {
	handleClose();
	deleteHandler(item.id);
  };

  return (
    <div>
      <DeleteIcon variant="contained" onClick={handleOpen} />
			<Dialog open={openModal} onClose={handleClose}>
				<DialogContent>
					<DialogContentText>
            <Typography>
						Are you sure to delete the {item.title} id {item.id}?
            </Typography>
					</DialogContentText>
          </DialogContent>
				<DialogActions>
					<Button variant="contained" onClick={handleClose}>
						No
					</Button>
					<Button variant="contained" onClick={handleYes}>
						Yes
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default DeleteModal;