import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import { Button, DialogTitle, Dialog, TextField, DialogContent, DialogActions } from "@mui/material";

export default function CategoriesNew() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Fab color="secondary" aria-label="add" onClick={() => setOpen(true)}>
                <AddIcon />
            </Fab>

            <Dialog onClose={() => setOpen(false)} open={open}>
                <DialogTitle>Шинэ ангилал</DialogTitle>
                <DialogContent>
                    <Box sx={{ pt: 2 }}>
                        <TextField label="Нэр" variant="outlined" />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Болих</Button>
                    <Button autoFocus variant="contained">
                        Хадгалах
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
