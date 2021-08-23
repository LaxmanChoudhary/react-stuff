import { createTheme, ThemeProvider } from "@material-ui/core";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import CreateNote from "./pages/CreateNote";
import Notes from "./pages/Notes";

const theme = createTheme();

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/react-stuff/" component={Notes} />
              <Route path="/react-stuff/create" component={CreateNote} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}