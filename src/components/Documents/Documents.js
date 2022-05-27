import React, { useEffect, useState } from "react";
import {
  DocumentContainer,
  HeaderText,
  Button,
  FilesContainer,
  FileContent,
  FileLogo,
  FileName,
  Logo,
} from "./Documents.Style";
import AddDocument from "../AddDocument/AddDocument";
import axios from "axios";
import Pdf from "../../assets/pdf_logo.png";
import doc from "../../assets/text_logo.png";

const Documents = () => {
  const [openModal, setOpenModal] = useState(false);
  const [documentData, setDocumentData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://6286d96de9494df61b2e3243.mockapi.io/DocumentsData`)
      .then((Response) => {
        setDocumentData(Response.data);
      });
  }, []);

  return (
    <div>
      <HeaderText>Documents</HeaderText>
      <DocumentContainer className="document container">
        <Button onClick={() => setOpenModal(true)}>add document</Button>
        <FilesContainer className="files-container">
          {documentData.map((document, i) => (
            <FileContent key={i} className="file-content">
              <FileLogo className="file-logo">
                {document.format === "PDF" ? (
                  <Logo src={Pdf} alt="" />
                ) : (
                  <Logo src={doc} alt="" />
                )}
              </FileLogo>
              <FileName className="file-name">{document.documentName}</FileName>
            </FileContent>
          ))}
        </FilesContainer>
      </DocumentContainer>
      <AddDocument open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default Documents;
