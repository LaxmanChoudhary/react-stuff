import { AppBar, Divider, Drawer, List, ListItem, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BallotIcon from '@material-ui/icons/Ballot';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import React from "react";
import { useHistory } from "react-router-dom";
import { format } from 'date-fns';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appbar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#f9f9f9'
  },
  toolbar: theme.mixins.toolbar,
  page: {
    width: '100%',
    padding: theme.spacing(3)
  },
}))

const paths = [
  {
    text: 'Notes',
    path: '/',
    icon: <BallotIcon />,
  },
  {
    text: 'Create',
    path: '/create',
    icon: <NoteAddIcon />,
  }  
]

const Layout = ({ children }) => {
  const classes = useStyles()
  const history = useHistory()
  const today = format(new Date(), 'do MMMM yyy')

  return (
    <div className={classes.root}>
      <AppBar color='inherit' elevation={0} position="fixed" className={classes.appbar}>
        <Toolbar>
          <Typography variant="body2">{today}</Typography>
        </Toolbar>
      </AppBar>
      <Drawer color="default" className={classes.drawer} variant="permanent" anchor="left" classes={{ paper: classes.drawerPaper}}>
        <Typography color="textSecondary" style={{ margin:15 }} align="center" variant="h6">Note - i - fy</Typography>
        <Divider />
        <List>
          {paths.map(path => (
            <ListItem button onClick={() => history.push(path.path)} key={path.text}>
              <ListItemIcon>{path.icon}</ListItemIcon>
              <ListItemText primary={path.text}/>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.page}>
        <div className={classes.toolbar} />
          {children}
      </main>
    </div>
  );
};

export default Layout;
