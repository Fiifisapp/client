import React from 'react'
import { DocumentContainer,  HeaderText, Button} from './Documents.Style'

const Documents = () => {
  return (
    <div>
      <HeaderText>Documents</HeaderText>
      <DocumentContainer className="document container">
        <Button>add document</Button>
      </DocumentContainer>
    </div>
  )
}

export default Documents