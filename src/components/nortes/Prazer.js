import React from "react";
import PrazerPDF from '../../pdfsNorte/Prazer.pdf'
import Points from "../Points";

function Prazer() {
  
  return (
    <div className="norte-prazer">
      <h1>Prazer</h1>
      <div className="video-bussola">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZiE5zjxwstI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <Points />
      <a href={ PrazerPDF } target="_blank" rel="noreferrer">Baixar resumo</a>
    </div>
  );
}

export default Prazer;
