import React from "react";

import styled from "styled-components";

import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetail from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import ListItemText from "@material-ui/core/ListItemText";

import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

function Review({ formData, navigation }) {
  const { go } = navigation;

  const {
    username,
    email,
    password,
    favTeam,
    fav,
    state,
    gender,
    phone,
    subscribe,
  } = formData;

  console.log(fav);

  const checkSub = () => {
    switch (subscribe) {
      case true:
        return "Subscribe";
      case false:
        return "Unsubscribe";
      default:
        return "Unsubscribe";
    }
  };

  const subCheck = checkSub()

  return (
    <Ris>
      <Title>
        <h1>Review</h1>
      </Title>
      <RenderAccordion
        summary="names"
        go={go}
        details={[
          { Username: username },
          { Email: email },
          { Password: password },
        ]}
      />

    
      <RenderAccordion
        summary="fav"
        go={go}
        details={[
          { FavTeam: favTeam },
          { Subscribe: subCheck },
          { favPlayer: fav },
        ]}
      />
      <RenderAccordion
        summary="person"
        go={go}
        details={[{ Address: state }, { gender: gender }, { Phone: phone }]}
      />
      <Button
        color="primary"
        variant="contained"
        style={{ marginTop: "1.5rem" }}
        onClick={() => go("submit")}
      >
        Submit
      </Button>
    </Ris>
  );
}

export default Review;

const Title = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const Ris = styled.div`
  height: 480px;
  width: 400px;
  background-color: #ebf3e6;
  border-radius: 2px;
  display: flex;
  flex-direction: column;

  padding: 15px 15px;
  box-sizing: border-box;
  overflow-y: scroll;
`;

export const RenderAccordion = ({ summary, details, go }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      {summary}
    </AccordionSummary>
    <AccordionDetail>
      <div>
        {details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return (
            <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
          );
        })}
        <IconButton
          color="primary"
          component="span"
          onClick={() => go(`${summary.toLowerCase()}`)}
        >
          <EditIcon />
        </IconButton>
      </div>
    </AccordionDetail>
  </Accordion>
);
