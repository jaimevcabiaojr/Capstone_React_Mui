import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import MemoryIcon from "@mui/icons-material/Memory";
import { useState } from "react";
// import UserAbout from "../pages/User/UserAbout";
// import NotFound from "./NotFound";

const AppBarDark = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <MemoryIcon sx={{ mr: 1, display: { xs: "none", md: "flex" } }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              color: "inherit",
              textDecoration: "none",
              display: { xs: "none", md: "flex" },
            }}
          >
            JVCabiao
          </Typography>
          <Box sx={{ ml:2,display: { xs: "none", md: "flex" } }}>
            <Button sx={{ color: "white" }} href="/">
              Home
            </Button>
            <Button sx={{ color: "white" }} href="/user/new">
              Add List
            </Button>
            <Button sx={{ color: "white" }} href="/about">
              About
            </Button>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuItem onClick={handleCloseNavMenu} textAlign="center">
              Home
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu} textAlign="center" href={"/user/new"}>
              Add List
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu} textAlign="center" >
              About
            </MenuItem>
          </Menu>

          <MemoryIcon sx={{ mr: 2, display: { xs: "flex", md: "none" } }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              flexGrow: 1,
              color: "inherit",
              textDecoration: "none",
              display: { xs: "flex", md: "none" },
            }}
          >
            JVCabiao
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarDark;
