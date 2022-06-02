import React, { useState } from 'react'
import { FileContent, FileLogo, FileName, Logo } from '../Documents/Documents.Style'
import Pdf from "../../assets/pdf_logo.png";
import doc from "../../assets/text_logo.png";
import EditDelete from '../EditDelete/EditDelete';

const SingleFile = ({document, index}) => {
    const [updateDocs, setUpdateDocs] = useState(false);
  return (
      <>
        <FileContent className="file-content">
                <FileLogo className="file-logo">
                    {document.format === "PDF" ? (
                    <Logo src={Pdf} alt="" onClick={() => setUpdateDocs(true)} />
                    ) : (
                    <Logo src={doc} alt="" onClick={() => setUpdateDocs(true)} />
                    )}
                </FileLogo>
                <FileName className="file-name">{document.documentName}</FileName>
        </FileContent>
        <EditDelete open={updateDocs} onClose={() => setUpdateDocs(false)} data={document}/>
        {/* {console.log(document)} */}
      </>
  )
}

export default SingleFile