import React from "react";
import ChrisResume from "../assets/ChrisWIlliams-Resume-24.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


const Resume = () => {
    return (
        <div>
            <h2>Resume</h2>
            <Document
            file={ChrisResume}
            onLoadError={console.error}
            style={{width: '100vw', height: 'auto'}}
            >
                <Page pageIndex={0}/>
            </Document>
        </div>
    )
  
};
export default Resume;