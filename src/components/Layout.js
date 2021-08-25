import {
  AppBar,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import { makeStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BallotIcon from "@material-ui/icons/Ballot";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import React from "react";
import { useHistory } from "react-router-dom";
import { format } from "date-fns";
import { useState } from "react";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appbar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#f9f9f9",
  },
  toolbar: theme.mixins.toolbar,
  page: {
    // width: "100%",
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  SpeedDial: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const paths = [
  {
    text: "Notes",
    path: "/",
    icon: <BallotIcon />,
  },
  {
    text: "Create",
    path: "/create",
    icon: <NoteAddIcon />,
  },
];

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const today = format(new Date(), "do MMMM yyy");

  return (
    <>
      <div className={classes.root}>
        <AppBar
          color="inherit"
          elevation={0}
          position="fixed"
          className={classes.appbar}
        >
          <Toolbar>
            <Typography variant="body2">{today}</Typography>
          </Toolbar>
        </AppBar>
        <Hidden xsDown implementation="css">
          <Drawer
            color="default"
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{ paper: classes.drawerPaper }}
          >
            <Typography
              color="textSecondary"
              style={{ margin: 15 }}
              align="center"
              variant="h6"
            >
              Note - i - fy
            </Typography>
            <Divider />
            <List>
              {paths.map((path) => (
                <ListItem
                  button
                  onClick={() => history.push(path.path)}
                  key={path.text}
                >
                  <ListItemIcon>{path.icon}</ListItemIcon>
                  <ListItemText primary={path.text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Hidden>
        <main className={classes.page}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
      <SpeedDial
        ariaLabel="speed dial"
        className={classes.SpeedDial}
        icon={<SpeedDialIcon />}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        {paths.map((pth) => (
          <SpeedDialAction
            key={pth.text}
            icon={pth.icon}
            tooltipTitle={pth.text}
            onClick={() => history.push(pth.path)}
          />
        ))}
      </SpeedDial>
    </>
  );
};

export default Layout;
