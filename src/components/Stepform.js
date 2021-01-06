import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import styled from "styled-components";

import Register from "./Register";
import Favorite from "./Favorite";
import Personal from "./Personal";
import Review from "./Review";
import Submit from "./Submit";

const defaultData = {
  username: "",
  email: "",
  password: "",
  favTeam: "",
  fav: '',
  state: "",
  gender: "",
  phone: "",
  subscribe:'',
};

const steps = [
  { id: "names" },
  { id: "fav" },
  { id: "person" },
  { id: "review" },
  { id: "submit" },
];

function Stepform() {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "names":
      return <Register {...props} />;
    case "fav":
      return <Favorite {...props} />;
    case "person":
      return <Personal {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
    default:
      return <Ris>Step form</Ris>;
  }
}

export default Stepform;

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
