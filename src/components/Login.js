import React from "react";

import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  inp: {
    height: 40,
    marginTop: 20,
    marginBottom: 10,
  },
  form: {
    width: "90%",
  },
  but:{
      marginTop:30
  }
});

function Login({ handleClick }) {
  
  const classes = useStyles();
  return (
    <Ris>
      <FormControl className={classes.form}>
          <Title>
        <h1>Sign In</h1>

          </Title>
        <TextField
          className={classes.inp}
          label="Email"
          variant="outlined"
          type="email"
        />
        <TextField
          className={classes.inp}
          label="Password"
          variant="outlined"
          type="password"
        />

<Button className={classes.but} variant="contained" color="primary">
        Sign In
      </Button>
      <Link onClick={handleClick} >
      Sign Up?
      </Link>
      </FormControl>
    </Ris>
  );
}

const Ris = styled.div`
  height: 350px;
  width: 400px;
  background-color: #eee6cf;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 15px;
  box-sizing: border-box;
`;

const Title = styled.div`
text-align:center;
margin-bottom:10px
`;

const Link = styled.a`
text-align:center;
margin-bottom:10px;
margin-top:15px;
text-decoration:underline;
cursor:pointer;
`;

export default Login;
