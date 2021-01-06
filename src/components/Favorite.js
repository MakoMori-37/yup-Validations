import React, { useState } from "react";

import styled from "styled-components";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function Favorite({ setForm, navigation }) {
  const [inputFields, setInputFields] = useState([{ fav: "" }]);

  const handleAddFields = () => {
    setInputFields([...inputFields, { fav: "" }]);
  };

  const fav = inputFields[0];

  console.log(inputFields[0]);
  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const [state, setState] = useState({
    subscribe: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.subscribe });
  };

  const handleSubmit = () => {
    setForm(fav)
  }

  return (
    <Ris onSubmit={handleSubmit} >
      <Title>
        <h1>Subscribe</h1>
      </Title>

      <Select name="favTeam" onChange={setForm}>
        <option value="-------">-Select Team-</option>
        <option value="liverpool">Liverpool</option>
        <option value="manu">Man U</option>
        <option value="arsenal">Arsenal</option>
      </Select>

      <Swit>
        <FormControlLabel
          control={
            <Switch
              subscribe={state.subscribe}
              onChange={(handleChange, setForm)}
              name="subscribe"
              color="primary"
            />
          }
          label="Sent news to email"
        />
      </Swit>

      {inputFields.map((inputField, index) => (
        <div key={index}>
          <TextField
            size="small"
            label="Favorite Player"
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

      <Butc>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigation.next()}
          fullWidth
          type='submit'
        >
          Next
        </Button>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => navigation.previous()}
          style={{ marginTop: "1rem" }}
          fullWidth
        >
          Back
        </Button>
      </Butc>
    </Ris>
  );
}

export default Favorite;

const Ris = styled.form`
  height: 450px;
  width: 400px;
  background-color: #ebf3e6;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  box-sizing: border-box;
  overflow-y: scroll;
  position: absolute;
`;

const Butc = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  margin-top: 270px;
`;

const Select = styled.select`
  margin-bottom: 20px;
  margin-top: 20px;
  border-radius: 4px;
  height: 40px;
  width: 160px;
  padding: 10px 10px;
  border: 1px solid gray;
`;
const Title = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;
const Swit = styled.div`
  margin-bottom: 20px;
`;
