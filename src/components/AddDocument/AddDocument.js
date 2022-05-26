import { useNavigate } from "react-router-dom";
import { useState  } from "react";
import {
  Overlay,
  ModalContainer,
  HeaderText,
  ButtonContainer,
  Button,
  Close,
} from "./AddDocument.Style";
import TextUpload from "../TextUpload/TextUpload";

const AddDocument = ({ open, onClose }) => {
  const [uploadText, setUploadText] = useState(false);

  const navigate = useNavigate();

  if (!open) return null;

  return (
    <>
      <Overlay className="overlay" onClick={onClose}>
        <ModalContainer
          className="modal-container"
          onClick={(e) => e.stopPropagation()}
        >
          <Close onClick={onClose}>X</Close>
          <HeaderText>click to upload a PDF or text</HeaderText>
          <ButtonContainer className="button-container">
            <Button onClick={() => navigate("pdf-upload")}>
              upload PDF
            </Button>
            <Button  onClick={() => setUploadText(true)}>
              upload text
            </Button>
          </ButtonContainer>
          <TextUpload open={uploadText} onClose={() => setUploadText(false)}/>
        </ModalContainer>
      </Overlay>
    </>
  );
};

export default AddDocument;
