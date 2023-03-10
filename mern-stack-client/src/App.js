import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import PostMessages from "./components/PostMessages";
import { store } from "./actions/store";
import { Container, AppBar, Typography } from "@material-ui/core";
// import ButterToast,{ POS_RIGHT,POS_TOP } from "butter-toast";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
          <Typography
            variant="h2"
            align="center">
            Employee Database
          </Typography>
        </AppBar>
        <PostMessages />
      </Container>
    </Provider>
  );
}

export default App;
