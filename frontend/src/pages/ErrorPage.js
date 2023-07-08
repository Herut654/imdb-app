import React from "react";
import notfound from "../assests/notfound.png";
import useStyles from "./style";
import { Container, Grid } from '@mui/material';


const ErrorPage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container alignItems="center" justifyContent="center">
        <img src={notfound} alt="Not found" />
      </Grid>
    </Container>
  );
};

export default ErrorPage;
