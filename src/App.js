import React, { useState } from "react";

import styled from "styled-components";
import bg from "./bg.webp";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(prev => !prev)
  }

  return <Container>{open ? <Register handleClick={handleClick} /> : <Login handleClick={handleClick} />}</Container>;
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
export default App;
