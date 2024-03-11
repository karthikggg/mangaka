import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import '../pages/deathnote3.jpg'







export const MANGAREAD = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
    };
  
    return (
      <div>
        <Document
          file='./manga posters/aot.pdf'  // Update with the path to your PDF document
          onLoadSuccess={onDocumentLoadSuccess}
          options={{ workerSrc: '/pdf.worker.min.js' }}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <img src='./manga posters/aot about.jpg' alt="" />      </div>
    );
  };
  
 