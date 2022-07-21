import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

export default function ButtonAppBar() {
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{ backgroundColor: "white", color: "black" }}
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img style={{ height: "40px" }} src="/images/logo.png"></img>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            .
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Products</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Knowledge Center</Button>
          <Button color="inherit">About us</Button>
          <Button color="inherit">Contact</Button>
          <Button style={{ backgroundColor: "#f93154" }} variant="contained">
            Login/Register
          </Button>
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}
