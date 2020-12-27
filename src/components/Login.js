import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  inp: {
    height: 50,
    marginTop: 15,
    marginBottom: 15,
    width: 300,
  },
  but: {
    marginTop: 15,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
});

function Login({ handleClick }) {
  let signUpSchema = yup.object().shape({
    email: yup.string().email().required("This field require!!"),
    password: yup.string().required("This field require!!"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data) => {
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    window.location.reload();
  };

  const classes = useStyles();
  return (
    <Ris>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>
          <h1>Sign In</h1>
        </Title>
        <TextField
          className={classes.inp}
          label="Email"
          variant="outlined"
          type="email"
          inputRef={register}
          name="email"
        />
        <Alert>
          <p>{errors.email?.message}</p>
        </Alert>
        <TextField
          className={classes.inp}
          label="Password"
          variant="outlined"
          type="password"
          inputRef={register}
          name="password"
        />

        <Alert>
          <p>{errors.password?.message}</p>
        </Alert>

        <Button
          type="submit"
          className={classes.but}
          variant="contained"
          color="primary"
        >
          Sign In
        </Button>
        <Link onClick={handleClick}>Sign Up?</Link>
      </form>
    </Ris>
  );
}

const Ris = styled.div`
  height: 400px;
  width: 400px;
  background-color: #ebf3e6;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 15px;
  box-sizing: border-box;
`;
const Alert = styled.div`
  color: #fb633c;
  margin-top: 10px;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const Link = styled.a`
  text-align: center;
  margin-bottom: 10px;
  margin-top: 20px;
  text-decoration: underline;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export default Login;
