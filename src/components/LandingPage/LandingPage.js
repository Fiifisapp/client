import APC from "../../assets/logo.png";
import Avatar from "../../assets/People search-bro.png";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  CheckerContainer,
  TextArea,
  ButtonContainer,
  LocalButton,
  WebButton,
  LogoContainer,
  Logo,
  HeroSection,
  HeroAvatar,
  AvatarImage,
  HeroText,
  BoldText,
  Button,
  ReportContainer,
} from "./LandingPage.Style";

const LandingPage = () => {
  const [show, setShow] = useState(true);

  const navigate = useNavigate();

  const handleAuthentication = () => {
    navigate("/authen");
  };

  
  return (
    <div>
      <LogoContainer className="logo-container">
        <Logo src={APC} alt="" />
      </LogoContainer>

      <HeroSection className="hero-section">
        <HeroAvatar className="avatar">
          <AvatarImage src={Avatar} alt="" />
        </HeroAvatar>

        <HeroText className="hero-text">
          If there is an issue with <BoldText>plagiarism</BoldText> , then we
          can <BoldText>pinpoint exactly </BoldText> who from and where from...
        </HeroText>

        <Button onClick={handleAuthentication}>let's find out</Button>
      </HeroSection>

      <CheckerContainer className="checker-container">
        <TextArea
          placeholder="Please insert your text to check for plagiarism either against the web or the local corpus"
          name="text"
          id=""
          cols="30"
          rows="10"
        ></TextArea>
        <ButtonContainer className="button-container">
          <LocalButton onClick={() => setShow(true)}>
            local check
          </LocalButton>
          <WebButton onClick={() => setShow(true)}>web check</WebButton>
        </ButtonContainer>
      </CheckerContainer>

      {show &&   <ReportContainer className="report-container">
          <button onClick={() => setShow(false)}>Close</button>
        </ReportContainer>
      }
    </div>
  );
};

export default LandingPage;
