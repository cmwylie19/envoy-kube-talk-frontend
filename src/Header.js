import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import "./App.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "white",
    color: theme.palette.secondary.main,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header({ toggleTheme }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img
              src="/logo192.png"
              style={{ height: "40px" }}
              className="App-logo"
              alt="logo"
            />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Envoy Demo
          </Typography>
          <Button color="inherit" onClick={() => toggleTheme()}>
            Toggle Theme
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
