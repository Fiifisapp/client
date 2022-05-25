import React, { useState } from 'react'
import { DocumentContainer,  HeaderText, Button} from './Documents.Style';
import AddDocument from '../AddDocument/AddDocument';

const Documents = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div>
      <HeaderText>Documents</HeaderText>
      <DocumentContainer className="document container">
        <Button onClick={() => setOpenModal(true)}>add document</Button>
      </DocumentContainer>
      <AddDocument open={openModal} onClose={() => setOpenModal(false)}/>
    </div>
  )
}

export default Documents