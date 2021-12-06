import React from "react";
import { Button, DialogTitle, Dialog, DialogActions } from "@mui/material";

export default function ConfirmDelete({ open, onClose, onCorfirm }) {
    return (
        <>
            <Dialog onClose={onClose} open={open}>
                <DialogTitle sx={{ minWidth: 300 }}>Устгах уу?</DialogTitle>

                <DialogActions>
                    <Button onClick={onClose}>Болих</Button>
                    <Button color="error" autoFocus variant="contained" onClick={onCorfirm}>
                        Устга
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
