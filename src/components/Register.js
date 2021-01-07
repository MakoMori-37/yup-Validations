import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles({
  inp: {
    width: "100%",
    marginTop: 15,
    marginBottom: 15,
  },

  but: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
});

function Register({ setForm, navigation }) {
  const classes = useStyles();
  const [state, setState] = useState({
    checked: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  let signUpSchema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = () => {
    navigation.next();
  };

  return (
    <Ris>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>
          <h1>Signup</h1>
        </Title>

        <TextField
          size="small"
          className={classes.inp}
          label="Username"
          variant="outlined"
          type="text"
          inputRef={register}
          onChange={setForm}
          name="username"
        />

        {errors.email?.message && (
          <Alert severity="error">Username Validation Field is Required</Alert>
        )}

        <TextField
          size="small"
          className={classes.inp}
          label="Email"
          variant="outlined"
          type="email"
          inputRef={register}
          onChange={setForm}
          name="email"
        />

        {errors.email?.message && (
          <Alert severity="error">Email Validation Field is Required</Alert>
        )}

        <TextField
          size="small"
          className={classes.inp}
          label="Password"
          variant="outlined"
          type="password"
          inputRef={register}
          onChange={setForm}
          name="password"
        />

        {errors.password?.message && (
          <Alert severity="error">Password Validation Field is Required</Alert>
        )}

        <Condition>
          <Title>
            <h3>Terms and Conditions</h3>
          </Title>
          <p>1.Definitions The following words and terms </p>
          <p>2.Agreement to these Terms and Conditions</p>
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

        <Button
          disabled={state.checked === false}
          type="submit"
          className={classes.but}
          variant="contained"
          color="primary"
        >
          Next
        </Button>
      </form>
    </Ris>
  );
}

export default Register;

const Ris = styled.div`
  height: 500px;
  width: 400px;
  background-color: #ebf3e6;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 15px;
  box-sizing: border-box;
  overflow-y: scroll;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const Condition = styled.div`
  margin-top: 20px;
  height: 90px;
  width: 100%;
  box-sizing: border-box;
`;
