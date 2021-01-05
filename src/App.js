import React from "react";

import styled from "styled-components";
import bg from "./bg.webp";
import Stepform from "./components/Stepform";



function App() {

  return (
    <>
      <Container>
       <Stepform/>
      </Container>

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

export default App;
