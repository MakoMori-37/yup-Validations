import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  inp: {
    height: 50,
    marginTop: 15,
    marginBottom: 15,
    width: "100%",
  },

  but: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
});

function Register({ handleClick }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  let signUpSchema = yup.object().shape({
    name: yup.string().required("This field require!!"),
    tel: yup.number().required("This field require!!"),
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

  return (
    <Ris>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>
          <h1>Signup</h1>
        </Title>
        <TextField
          className={classes.inp}
          label="Name"
          variant="outlined"
          type="text"
          inputRef={register}
          name="name"
        />

        <Alert>
          <p>{errors.name?.message}</p>
        </Alert>
        <TextField
          className={classes.inp}
          label="Tel."
          variant="outlined"
          type="tel"
          inputRef={register}
          name="tel"
        />
        <Alert>
          <p>{errors.tel?.message}</p>
        </Alert>
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
          type="submit"
          className={classes.but}
          variant="contained"
          color="primary"
        >
          Signup
        </Button>
        <Link onClick={handleClick}>Sign In?</Link>
      </form>
    </Ris>
  );
}

const Ris = styled.div`
  height: 680px;
  width: 400px;
  background-color: #ebf3e6;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 15px;
  box-sizing: border-box;
  overflow-y:scroll;
`;

const Condition = styled.div`
  margin-top: 20px;
  height: 90px;
  width: 100%;
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

export default Register;
