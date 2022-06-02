import React, { useState } from "react";
import TextUpload from "../TextUpload/TextUpload";
import PDFUpload from "../PDFUpload/PDFUpload";
import {
  Overlay,
  ModalContainer,
  HeaderText,
  ButtonContainer,
  Button,
  Close,
} from "./EditDelete.Style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditDelete = (props) => {
  const [uploadText, setUploadText] = useState(false);
  const [uploadPDF, setUploadPDF] = useState(false);
  const navigate = useNavigate();
  const close = props.onClose
  const deleteFile = () => {
    const ID = props.data.id;
    
    axios
      .delete(`https://6286d96de9494df61b2e3243.mockapi.io/DocumentsData/${ID}`)
      .then(() => {
        close()
      });
      close()
      navigate("/dashboard/documents")
  };

  if (!props.open) return null;
  return (
    <>
      <Overlay className="overlay" onClick={props.onClose}>
        <ModalContainer
          className="modal-container"
          onClick={(e) => e.stopPropagation()}
        >
          <Close onClick={props.onClose}>X</Close>
          <HeaderText>click to edit or delete</HeaderText>
          <ButtonContainer className="button-container">
            <Button>edit</Button>
            <Button onClick={deleteFile}>delete</Button>
          </ButtonContainer>
          <TextUpload open={uploadText} onClose={() => setUploadText(false)} />
          <PDFUpload open={uploadPDF} onClose={() => setUploadPDF(false)} />
        </ModalContainer>
      </Overlay>
    </>
  );
};

export default EditDelete;
