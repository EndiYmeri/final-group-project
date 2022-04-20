import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import React from "react";

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

export default function LanguageModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>
                <svg width={16}
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
                        Add Language
                        <Divider></Divider>
                    </Typography>

                    <form className="education-form">
                        <label className="label" >Language
                            <input type="text" name="language" placeholder="Ex: Language" />
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