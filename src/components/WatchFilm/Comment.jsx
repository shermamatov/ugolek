import { Avatar, Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const Comment = ({ item }) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [date, setDate] = useState(new Date().toLocaleDateString());

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                borderBottom: "1px solid gray",
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "sans-serif",
                mb: "20px",
                padding: "10px",
            }}
        >
            <Box sx={{ width: "15%", height: "100%" }}>
                <img
                    src="https://static.wikia.nocookie.net/eae1cafe-8968-4b65-8e5a-eec208511316/scale-to-width/755"
                    width="100%"
                    height="60%"
                    alt=""
                />
            </Box>
            {/* <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton> */}
            <Box
                sx={{
                    width: "90%",
                    height: "100%",
                    marginLeft: "20px",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        height: "20%",
                        fontSize: { xs: "12px", sm: "16px", md: "18px" },
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                    }}
                >
                    <h3>{item.userName}</h3>
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        wordWrap: "break-word",
                        fontSize: { xs: "12px", sm: "14px", md: "16px" },
                        opacity: "0.8",
                    }}
                >
                    {item.comment}
                </Box>
                <Box
                    sx={{
                        fontSize: { xs: "10px", sm: "12px", md: "14px" },
                        display: "flex",
                        alignItems: "end",
                        color: "gray",
                        marginBottom: "0px",
                        justifyContent: "end",
                    }}
                >
                    <span style={{ marginRight: "10px" }}>{item.time}</span>
                    <span>{item.date}</span>
                </Box>
            </Box>
        </Box>
    );
};

export default Comment;
