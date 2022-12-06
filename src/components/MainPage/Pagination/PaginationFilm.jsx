import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { filmContext } from "../../../Contexts/FilmContextProvider";
import "./Pagination.css";

const ProductSortPagination = ({ page, setPage, count }) => {
    const [sort, setSort] = React.useState("");
    const { FILM_API } = useContext(filmContext);
    const [productCount, setProductCount] = useState([]);

    async function productQuantity() {
        const { data } = await axios.get(FILM_API);
        setProductCount(data);
    }

    useEffect(() => {
        productQuantity();
    }, []);

    const handleSort = (event) => {
        setSort(event.target.value);
    };

    const handleChange = (e, p) => {
        setPage(p);
    };

    return (
        <div>
            <Box
                sx={{
                    width: "100%",
                    display: {
                        xs: "block",
                        sm: "block",
                        md: "flex",
                        lg: "flex",
                        xl: "flex",
                    },
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: "3%",
                }}
            >
                <Stack
                    spacing={2}
                    sx={{
                        button: { color: "#ffffff", border: "1px solid white" },
                    }}
                >
                    <Pagination
                        color="primary"
                        page={page}
                        count={count}
                        onChange={handleChange}
                        variant="outlined"
                        shape="rounded"
                    />
                </Stack>
            </Box>
        </div>
    );
};

export default ProductSortPagination;
