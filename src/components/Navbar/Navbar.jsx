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
import { InputAdornment, TextField } from "@mui/material";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [searchState, setSearchState] = React.useState(false);
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

  return (
    <AppBar
      sx={{
        backgroundColor: "black",
      }}
      position="sticky"
    >
      <Toolbar
        sx={{ display: "flex", width: "85%", margin: "auto" }}
        disableGutters
      >
        <img className="logoBig" src={LogoStone} width="35px" />
        <Typography
          variant="h6"
          noWrap
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <p className="ugol-tv">УГОЛЬ ТВ</p>
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
            <MenuItem
              sx={{
                borderBottom: "1px solid lightgray",
              }}
              onClick={handleCloseNavMenu}
            >
              <Typography textAlign="center">ДОБАВИТЬ</Typography>
            </MenuItem>
            <MenuItem
              sx={{
                borderBottom: "1px solid lightgray",
              }}
              onClick={handleCloseNavMenu}
            >
              <Typography textAlign="center">РАНДОМ</Typography>
            </MenuItem>
            <MenuItem
              sx={{
                borderBottom: "1px solid lightgray",
              }}
              onClick={handleCloseNavMenu}
            >
              <Typography textAlign="center">О НАС</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">СВЯЖИТЕСЬ С НАМИ</Typography>
            </MenuItem>
          </Menu>
        </Box>
        <img src={LogoStone} className="logoMin" style={{ width: "35px" }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
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
          }}
        >
          УГОЛЬ ТВ
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
          }}
        >
          <Button sx={{ my: 2, color: "white", display: "block" }}>
            ДОБАВИТЬ
          </Button>
          <Button sx={{ my: 2, color: "white", display: "block" }}>
            РАНДОМ
          </Button>
          <Button sx={{ my: 2, color: "white", display: "block" }}>
            О НАС
          </Button>
          <Button sx={{ my: 2, color: "white", display: "block" }}>
            СВЯЖИТЕСЬ С НАМИ
          </Button>
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={openSearch} sx={{ p: 0 }}>
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
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
      {searchState && (
        <Box
          sx={{
            height: "100%",
            width: "100%",
            backgroundColor: "black",
            position: "absolute",
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
