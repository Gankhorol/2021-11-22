import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CategoriesNew from "./CategoriesNew";
import CategoriesList from "./CategoriesList";
import ConfirmDelete from "./ConfirmDelete";

export default function Categories() {
    return (
        <Container maxWidth="sm" sx={{ mt: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                <Typography variant="h2"> Ангилал</Typography>
                <CategoriesNew />
            </Box>

            <CategoriesList />

            <ConfirmDelete open={false} />
        </Container>
    );
}
