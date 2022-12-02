import {
    FormControl,
    InputLabel,
    MenuItem,
    NativeSelect,
    Select,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Filter = () => {
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                padding: "0px 20px",
                backgroundColor: "#2B2B2B",
                marginTop: "40px",
                width: "100%",
                height: "62px",
            }}
        >
            <FormControl sx={{ width: "40%" }}>
                <Select
                    defaultValue={"All"}
                    sx={{
                        // width: "35%",
                        color: "white",
                        border: "2px solid white",
                    }}
                    inputProps={{
                        name: "sort",
                    }}
                    size="small"
                >
                    <MenuItem value={"All"}>All</MenuItem>
                    <MenuItem value={"Shoes"}>Shoes</MenuItem>
                    <MenuItem value={"Bandana"}>Bandana</MenuItem>
                    <MenuItem value={"Hoodie"}>Hoodie</MenuItem>
                    <MenuItem value={"Sweatshirt"}>Sweatshirt</MenuItem>
                    <MenuItem value={"Short"}>Short</MenuItem>
                    <MenuItem value={"Jogger"}>Jogger</MenuItem>
                    <MenuItem value={"Bomber"}>Bomber</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ width: "25%", marginLeft: "10px" }}>
                <Select
                    defaultValue={"All"}
                    sx={{
                        color: "white",
                        border: "2px solid white",
                    }}
                    inputProps={{
                        name: "sort",
                    }}
                    size="small"
                >
                    <MenuItem value={"All"}>All</MenuItem>
                    <MenuItem value={"asc"}>Low to High</MenuItem>
                    <MenuItem value={"desc"}>High to Low</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ width: "25%", marginLeft: "10px" }}>
                <Select
                    defaultValue={"All"}
                    sx={{
                        color: "white",
                        border: "2px solid white",
                    }}
                    inputProps={{
                        name: "sort",
                    }}
                    size="small"
                >
                    <MenuItem value={"All"}>All</MenuItem>
                    <MenuItem value={"asc"}>Low to High</MenuItem>
                    <MenuItem value={"desc"}>High to Low</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default Filter;
