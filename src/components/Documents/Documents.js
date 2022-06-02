import React, { useEffect, useState } from "react";
import {
  DocumentContainer,
  HeaderText,
  Button,
  FilesContainer,
} from "./Documents.Style";
import { DocumentState } from "../../Context/DocumentProvider";
import AddDocument from "../AddDocument/AddDocument";
import axios from "axios";
import SingleFile from "../Files/SingleFile";

const Documents = () => {
  const { documents, setDocuments } = DocumentState();

  const [addDocs, setAddDocs] = useState(false);

  useEffect(() => {
    axios
      .get(`https://6286d96de9494df61b2e3243.mockapi.io/DocumentsData`)
      .then((Response) => {
        setDocuments(Response.data);
      });
  }, [setDocuments]);

  return (
    <div>
      <HeaderText>Documents</HeaderText>
      <DocumentContainer className="document container">
        <Button onClick={() => setAddDocs(true)}>add document</Button>
        <FilesContainer className="files-container">
          { documents? ( documents.map((document, i) => (
            <SingleFile document={document} index={i} key={i}/> 
          ))
          ) : <p style={{color: "black"}}>No documents available</p>
        }
        </FilesContainer>
      </DocumentContainer>
      <AddDocument open={addDocs} onClose={() => setAddDocs(false)} />
      
    </div>
  );
};

export default Documents;
