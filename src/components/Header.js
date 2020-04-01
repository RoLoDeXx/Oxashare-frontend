import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap>
            <Link to="/">RoLoDeXx</Link>
          </Typography> */}
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Link to="/">Home</Link>
            </Grid>
            <Grid item>
              <div>
                <Link to="/stream/edit">Edit</Link>
                <Link to="/stream/delete">Delete</Link>
              </div>
            </Grid>
          </Grid>
          <div>
            <div></div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
