import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import React from "react";
import './Education.css';
import Datetime from 'react-datetime';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #e0e0e0",
    boxShadow: 14,
    p: 4
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} ><svg width={'16px'}
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                viewBox="0 0 14 14"
                role="img"
            >
                <polygon
                    fillRule="evenodd"
                    points="6 0 6 6 0 6 0 8 6 8 6 14 8 14 8 8 14 8 14 6 8 6 8 0"
                ></polygon>
            </svg></Button>
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

                    <form className="education-form">
                        <label className="label" >School
                            <input type="text" name="school" placeholder="Ex: University Of Tirana" />
                        </label>
                        <label className="label" >Dates Attended
                            <div className="years">
                                <Datetime dateFormat="YYYY" timeFormat={false} />
                                <Datetime dateFormat="YYYY" timeFormat={false} />

                            </div>
                        </label>
                        <label >Degree
                            <input type="text" name="degree" placeholder="Ex: Computer Science" />
                        </label>
                        <div className="save-button">
                            <input type="button" value="Save" className="save" />
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
