import React, { useState, useEffect } from "react";

import styled from "styled-components";
import bg from "./bg.webp";
import Register from "./components/Register";
import Login from "./components/Login";

import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function App() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const [dark, setDark] = useState(false);

  console.log(dark);

  const [state, setState] = useState({
    checked: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setDark((prev) => !prev);
  };

  return (
    <>
      <Container>
        {open ? (
          <Register dark={dark} handleClick={handleClick} />
        ) : (
          <Login dark={dark} handleClick={handleClick} />
        )}
      </Container>

      <Setting>
        <FormControlLabel
          control={
            <Switch
              checked={state.checked}
              onChange={handleChange}
              color="primary"
              name="checked"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          }
          label="Darkmode"
        />
      </Setting>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Setting = styled.div`
  position: fixed;
  top: 35px;
  left: 35px;
  width: 350px;
  height: 350px;
  background-color: whitesmoke;
`;
export default App;
