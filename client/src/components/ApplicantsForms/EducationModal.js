import React, { useState } from "react";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "var(--fifth-color)",
  },
};

// const path = "https://hotels-bookings.herokuapp.com/hotels";


// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#yourAppElement");

const EducationModal = ({ caption, editableEducation, education, setEducation }) => {
  // console.log("editableEducation in modal:", editableEducation);
  // console.log("education in modal:", education);
  const [id, setId] = useState(education.id);
  const [school, setSchool] = useState(education.school);
  const [degree, setDegree] = useState(education.degree);
  const [description, setDescription] = useState(education.description);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const formTitle = caption;
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    setId(education.length+1);
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
    console.log("Call close");
  }

  const handleSubmitEvent = (submitEvent) => {
    submitEvent.preventDefault();
    const newEdu = {
      id: id,
      school: school,
      degree: degree,
      description: description,
    };
    // axios.post(path, newHotel).then(() => loadData());
    // console.log(newHotel);
    setEducation([...education, newEdu]);
    console.log(newEdu);
    closeModal();
  };

  return (
    <>
      <button className="btn btn-add" onClick={openModal}>
        {formTitle}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <CloseIcon onClick={closeModal} />
        <h4>{formTitle}</h4>
        <form
          onSubmit={handleSubmitEvent}
        >
          <label htmlFor="school">School</label>
          <input
            type="text"
            name="school"
            id="school"
            className="form-control"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            name="degree"
            id="degree"
            className="form-control"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit" className="btn btn-primary d-block mt-4">
            Save
          </button>
        </form>
      </Modal>
    </>
  );
};

export default EducationModal;
