import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LogoStone from "../../img/stone.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";
import {
    Link,
    useNavigate,
    useParams,
    useSearchParams,
} from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContextProvider";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { filmContext } from "../../Contexts/FilmContextProvider";
import { TextField } from "@mui/material";
function ResponsiveAppBar() {
    const {
        user: { email },
        handleLogout,
    } = useAuth();
    const { data, getOneDate, searchState, setSearchState } =
        React.useContext(filmContext);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const openSearch = () => {
        setSearchState(true);
    };
    const closeSearch = () => {
        setSearchState(false);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const { id } = useParams();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const [search, setSearch] = React.useState(searchParams.get("q") || "");

    React.useEffect(() => {
        setSearchParams({
            q: search,
        });
    }, [search]);

    let randomId = Math.ceil(parseInt(Math.random() * (data.length - 1) + 1));

    return (
        <AppBar
            sx={{
                backgroundColor: "black",
            }}
            position="sticky"
        >
            <Toolbar
                sx={{
                    display: "flex",
                    width: { sm: "90%", xs: "97%" },
                    margin: "auto",
                }}
                disableGutters
            >
                <img className="logoBig" src={LogoStone} width="35px" />
                <Typography
                    variant="h6"
                    noWrap
                    onClick={() => navigate("/")}
                    sx={{
                        mr: 2,
                        display: { xs: "none", md: "flex" },
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                        cursor: "pointer",
                    }}
                >
                    ugolek.tv
                </Typography>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: { xs: "flex", md: "none" },
                    }}
                >
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: {
                                xs: "block",
                                md: "none",
                            },
                        }}
                    >
                        {email && (
                            <MenuItem
                                sx={{
                                    borderBottom: "1px solid lightgray",
                                }}
                                onClick={() => {
                                    handleCloseNavMenu();
                                    navigate("/add");
                                }}
                            >
                                <Typography textAlign="center">ADD</Typography>
                            </MenuItem>
                        )}

                        <MenuItem
                            sx={{
                                borderBottom: "1px solid lightgray",
                            }}
                            onClick={() => {
                                handleCloseNavMenu();
                                navigate(`/watch/${randomId}`);
                                getOneDate(randomId);
                            }}
                        >
                            <Typography textAlign="center">RANDOM</Typography>
                        </MenuItem>
                        <MenuItem
                            sx={{
                                borderBottom: "1px solid lightgray",
                            }}
                            onClick={handleCloseNavMenu}
                        >
                            <Typography textAlign="center">ABOUT US</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
                <img
                    src={LogoStone}
                    className="logoMin"
                    style={{ width: "35px" }}
                />
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    onClick={() => navigate("/")}
                    sx={{
                        mr: 2,
                        display: { xs: "flex", md: "none" },
                        flexGrow: 1,
                        fontSize: "16px",
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                        cursor: "pointer",
                    }}
                >
                    ugolek.tv
                </Typography>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: { xs: "none", md: "flex" },
                    }}
                >
                    {email && (
                        <Button
                            onClick={() => navigate("/add")}
                            sx={{ my: 2, color: "white", display: "block" }}
                        >
                            ADD
                        </Button>
                    )}
                    <Button
                        onClick={() => {
                            navigate(`/watch/${randomId}`);
                            getOneDate(randomId);
                        }}
                        sx={{ my: 2, color: "white", display: "block" }}
                    >
                        RANDOM
                    </Button>
                    <Button sx={{ my: 2, color: "white", display: "block" }}>
                        ABOUT US
                    </Button>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    {email && (
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={() => navigate("/cart")}
                                sx={{ p: 0 }}
                            >
                                <BookmarksIcon
                                    sx={{
                                        color: "white",
                                        fontSize: { xs: "22px", sm: "28px" },
                                        marginRight: "10px",
                                    }}
                                />
                            </IconButton>
                        </Tooltip>
                    )}
                    <Tooltip title="Open settings">
                        <IconButton
                            onClick={() => {
                                openSearch();
                                window.scrollTo(0, 650);
                                navigate("/");
                            }}
                            sx={{ p: 0 }}
                        >
                            <SearchOutlinedIcon
                                sx={{
                                    color: "white",
                                    fontSize: { xs: "22px", sm: "30px" },
                                    marginRight: "10px",
                                }}
                            />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <AccountCircleIcon
                                sx={{
                                    color: "white",
                                    fontSize: { xs: "22px", sm: "30px" },
                                }}
                            />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {email ? (
                            <MenuItem onClick={handleLogout}>
                                <Typography sx={{ textAlign: "center" }}>
                                    Logout
                                </Typography>
                            </MenuItem>
                        ) : (
                            <Link
                                to="/auth"
                                style={{
                                    textDecoration: "none ",
                                    color: "black",
                                }}
                            >
                                <MenuItem onClick={handleLogout}>
                                    <Typography sx={{ textAlign: "center" }}>
                                        login
                                    </Typography>
                                </MenuItem>
                            </Link>
                        )}
                    </Menu>
                </Box>
            </Toolbar>
            {searchState && (
                <Box
                    sx={{
                        height: "64px",
                        width: "100%",
                        backgroundColor: "black",
                        position: "fixed",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <TextField
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        placeholder="search"
                        onChange={(e) => setSearch(e.target.value)}
                        sx={{
                            backgroundColor: "#fff",
                            width: "60%",
                            borderRadius: "5px",
                            height: "40px",
                        }}
                    />
                    <Button onClick={closeSearch}>
                        <CloseIcon sx={{ fontSize: "30px" }} />
                    </Button>
                </Box>
            )}
        </AppBar>
    );
}
export default ResponsiveAppBar;
