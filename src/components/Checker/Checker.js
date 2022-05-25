import React, { useState } from "react";
import {
  CheckerContainer,
  HeaderText,
  TextArea,
  ButtonContainer,
  LocalButton,
  WebButton,
} from "./Checker.Style";
import Report from "../Report/Report";

const Checker = () => {
  const [openReport, setOpenReport] = useState(false);

  return (
    <>
      <HeaderText>Checker</HeaderText>
      <CheckerContainer className="checker-container">
        <TextArea
          placeholder="Please insert your text to check for plagiarism either against the web or the local corpus"
          name="text"
          id=""
          cols="30"
          rows="10"
        ></TextArea>
        <ButtonContainer className="button-container">
          <LocalButton onClick={() => setOpenReport(true)}>local check</LocalButton>
          <WebButton onClick={() => setOpenReport(true)}>web check</WebButton>
        </ButtonContainer>
      </CheckerContainer>
      <Report open={openReport} onClose={() => setOpenReport(false)}/>
    </>
  );
};

export default Checker;
