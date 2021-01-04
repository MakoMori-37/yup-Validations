import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Alert from "@material-ui/lab/Alert";

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

function Register({ handleClick, dark }) {
  const [inputFields, setInputFields] = useState([{ fav: "" }]);

  const classes = useStyles();

 

  const [state, setState] = useState({
    checked: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { fav: "" }]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  return (
    <Ris dark={dark} >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>
          <h1>Signup</h1>
        </Title>

        <TextField
          className={classes.inp}
          label="Email"
          variant="outlined"
          type="email"
          inputRef={register}
          name="email"
        />
        {errors.email?.message && (
          <Alert severity="error">Email Validation Field is Required</Alert>
        )}

        <TextField
          className={classes.inp}
          label="Password"
          variant="outlined"
          type="password"
          inputRef={register}
          name="password"
        />

        {errors.password?.message && (
          <Alert severity="error">Password Validation Field is Required</Alert>
        )}

        {inputFields.map((inputField, index) => (
          <div key={index}>
            <TextField
              className={classes.inp}
              label="Your favorite Artist"
              variant="outlined"
              type="text"
              name="fav"
              value={inputField.fav}
              onChange={(event) => handleChangeInput(index, event)}
            />
            <IconButton
              disabled={inputFields.length === 1}
              onClick={() => handleRemoveFields(inputField.index)}
            >
              <RemoveIcon />
            </IconButton>
            <IconButton onClick={handleAddFields}>
              <AddIcon style={{ color: "green" }} />
            </IconButton>
          </div>
        ))}

        <Condition  >
          <Title   >
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
  background-color: ${({dark}) => (dark ? `#54554F` :` #ebf3e6`)};
  color: ${({dark}) => (dark ? ` #ebf3e6`:`#54554F`)};
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 15px;
  box-sizing: border-box;
  overflow-y: scroll;
`;

const Condition = styled.div`
  margin-top: 20px;
  height: 90px;
  width: 100%;
  box-sizing: border-box;
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
