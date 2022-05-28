import React, { useState } from 'react';
import TextUpload from '../TextUpload/TextUpload';
import PDFUpload from '../PDFUpload/PDFUpload';
import {
    Overlay,
    ModalContainer,
    HeaderText,
    ButtonContainer,
    Button,
    Close,
  } from "./EditDelete.Style"

const EditDelete = ({open, onClose}) => {
    const [uploadText, setUploadText] = useState(false);
  const [uploadPDF, setUploadPDF] = useState(false);

    if (!open) return null;
  return (
    <>
        <Overlay className="overlay" onClick={onClose}>
        <ModalContainer
          className="modal-container"
          onClick={(e) => e.stopPropagation()}
        >
          <Close onClick={onClose}>X</Close>
          <HeaderText>click to edit or delete</HeaderText>
          <ButtonContainer className="button-container">
            <Button >
              edit
            </Button>
            <Button  >
              delete
            </Button>
          </ButtonContainer>
          <TextUpload open={uploadText} onClose={() => setUploadText(false)}/>
          <PDFUpload open={uploadPDF} onClose={() => setUploadPDF(false)}/>
        </ModalContainer>
      </Overlay>
    </>
  )
}

export default EditDelete