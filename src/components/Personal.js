import React from "react";

import styled from "styled-components";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Personal({ formData, setForm, navigation }) {
  const { state, phone } = formData;

  return (
    <Ris>
      <Title>
        <h1>Personal</h1>
      </Title>

      <TextField
        label="Address"
        name="state"
        value={state}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />

      <TextField
        label="Phone"
        name="phone"
        value={phone}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        type="number"
      />

      <Radio>
          <p>gender</p>
      <Input type="radio" name="gender" value='male'  onChange={setForm} />
      <label for="male">Male</label><br></br>
      <Input type="radio" name="gender" value='female'  onChange={setForm} />
      <label for="female">Female</label><br></br>   
      </Radio>
      <Button
          color="primary"
          variant="contained"
          onClick={() => navigation.next()}
          fullWidth
        >
          Next
        </Button>

        <Button
          color="secondary"
          variant="contained"
          style={{ marginTop: "1rem" }}
          fullWidth

          onClick={() => navigation.previous()}
        >
          Back
        </Button>
    </Ris>
  );
}

export default Personal;

const Ris = styled.div`
  height: 450px;
  width: 400px;
  background-color: #ebf3e6;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  
  padding: 15px 15px;
  box-sizing: border-box;
  overflow-y: scroll;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const Radio = styled.div`
margin: 20px 0;
`;


const Input = styled.input`
margin: 10px 5px;
`;
