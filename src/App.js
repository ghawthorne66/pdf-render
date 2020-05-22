import React from 'react';
import logo from './logo.svg';
import './App.css';

import TestPDF from './pdf-files/test-file.pdf'

function App() {

  // const PdfBlob = new Blob(TestPDF);

  // const file = new Blob(PdfBlob, {
  //   type: 'application/pdf',
  // });
  
  // const fileURL = URL.createObjectURL(file);
  
  // window.open(fileURL);

  return (
    <div className="App">
      
      <main>
        <h3>Testing React Apps</h3>
        <br/>
        <a href={TestPDF}>From Source Folder</a>

        <a href="https://pdf-renderer.netlify.app/pdf-files/test-file.pdf">From Static Files</a>
        {/* <a href="http://localhost:3000/pdf-files/viewer.html/test-file.pdf">Click here for my pdf</a> */}
      </main>
    </div>
  );
}

export default App;
