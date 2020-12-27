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
});

function Register({ handleClick }) {
  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const classes = useStyles();
  return (
    <Ris>
      <FormControl className={classes.form}>
          <Title>
        <h1>Signup</h1>

          </Title>
        <TextField
          className={classes.inp}
          label="Name"
          variant="outlined"
          type="text"
        />

        <TextField
          className={classes.inp}
          label="Tel."
          variant="outlined"
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />

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

        <Condition>
            <Title>

          <h3>Terms and Conditions</h3>
            </Title>
          <p>1.Definitions The following words and terms </p>
          <p>
            2.Agreement to these Terms and Conditions 3.All Users shall use
            the Services 
          </p>
        </Condition>

        <FormControlLabel
          control={
            <Checkbox
              checked={state.checked}
              onChange={handleChange}
              name="checked"
              color="primary"
            />
          }
          label="Accept"
        />

<Button variant="contained" color="primary">
        Signup
      </Button>
      <Link onClick={handleClick} >
      Sign In?
      </Link>
      </FormControl>
    </Ris>
  );
}

const Ris = styled.div`
  height: 600px;
  width: 400px;
  background-color: #eee6cf;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 15px;
  box-sizing: border-box;
`;

const Condition = styled.div`
margin-top:20px;
  height: 90px;
  width: 100%;
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

export default Register;
