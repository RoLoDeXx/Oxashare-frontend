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
import GoogleAuth from "./GoogleAuth";
export default function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>

          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Link className="headerLink" to="/">
                Home
              </Link>
            </Grid>
            <Grid item>
              <div>
                <Link className="headerLink" to="/stream/edit">
                  Browse
                </Link>
                {/* <Link className="headerLink" to="/stream/delete">
                  Delete
                </Link> */}
              </div>
              <GoogleAuth></GoogleAuth>
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
