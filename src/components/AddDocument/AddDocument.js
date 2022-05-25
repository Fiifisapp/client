import { useNavigate, Outlet } from "react-router-dom";
import {
  Overlay,
  ModalContainer,
  HeaderText,
  ButtonContainer,
  Button,
  Close,
} from "./AddDocument.Style";

const AddDocument = ({ open, onClose }) => {
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
            <Button onClick={() => navigate("text-upload")}>
              upload text
            </Button>
          </ButtonContainer>
        </ModalContainer>
      </Overlay>
      <Outlet/>
    </>
  );
};

export default AddDocument;
