import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DeleteModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <div>
      <DeleteIcon variant="contained" onClick={handleOpen}/>
      <Modal
        keepMounted
        open={openModal}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Are sure to delete the application?
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            <Button>Yes</Button> 
            <Button>No</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};


export default DeleteModal;