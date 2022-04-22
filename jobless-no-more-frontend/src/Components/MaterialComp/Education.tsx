import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Education.css";
import Datetime from "react-datetime";
import { User } from "../../types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #e0e0e0",
  boxShadow: 14,
  p: 4,
};
type Props = {
  user: User;
  setUser: Function;
};
export default function BasicModal({ user, setUser }: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [fromyear, setfromYear] = useState(new Date());
  const [endyear, setendYear] = useState(new Date());
  function getFromYear() {
    const year = new Date(fromyear);
    return year.getFullYear();
  }

  function getEndYear() {
    const year = new Date(endyear);
    return year.getFullYear();
  }

  function addEducation(e: any, user: User) {
    e.preventDefault();
    const institute = e.target.school.value;
    const profileOfStudies = e.target.degree.value;
    const fromYear = getFromYear();
    const endYear = getEndYear();
    fetch("http://localhost:4000/education", {
      method: "POST",
      headers: {
        Authorization: localStorage.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        institute: institute,
        profileOfStudies: profileOfStudies,
        fromYear: fromYear,
        endYear: endYear,
        freelanceUserId: user.id,
      }),
    })
      .then((resp) => resp.json())

      .then((data) => {
        const update = JSON.parse(JSON.stringify(user));
        update.education.push(data);
        console.log(data);
        setUser(update);
      });

    e.target.reset();
    handleClose();
  }

  return (
    <div>
      <Button onClick={handleOpen}>
        <svg
          width={"16px"}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          viewBox="0 0 14 14"
          role="img"
        >
          <polygon
            fillRule="evenodd"
            points="6 0 6 6 0 6 0 8 6 8 6 14 8 14 8 8 14 8 14 6 8 6 8 0"
          ></polygon>
        </svg>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" mb={4}>
            Add Education
            <Divider></Divider>
          </Typography>

          <form
            className="education-form"
            onSubmit={(e) => addEducation(e, user)}
          >
            <label className="label">
              School
              <input
                type="text"
                name="school"
                placeholder="Ex: University Of Tirana"
              />
            </label>
            <label className="label">
              Dates Attended
              <div className="years">
                <Datetime
                  dateFormat="YYYY"
                  timeFormat={false}
                  inputProps={{ placeholder: "Start Date" }}
                  onChange={(date: any) => setfromYear(date._d)}
                />
                <Datetime
                  dateFormat="YYYY"
                  timeFormat={false}
                  inputProps={{ placeholder: "End Date" }}
                  onChange={(date: any) => setendYear(date._d)}
                />
              </div>
            </label>
            <label>
              Degree
              <input
                type="text"
                name="degree"
                placeholder="Ex: Computer Science"
              />
            </label>
            <div className="save-button">
              <input type="submit" value="Save" className="save" />
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
