import React from 'react'
// import { Button } from 'react-bootstrap'
import resumePdf from "../assets/pdf/Ben-Resume-2023.pdf";


function Resume() {
  return (
    <>
       <button id="print" type="button" className="nav-link button">
        <a href={resumePdf} className="button-style">
          Resume
        </a>
      </button>
    </>
  )
}

export default Resume
