import { MenuItem, Select } from "@mui/material";
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
                backgroundColor: "#2B2B2B",
                marginTop: "40px",
                width: "100%",
                height: "62px",
            }}
        >
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </Box>
    );
};

export default Filter;
