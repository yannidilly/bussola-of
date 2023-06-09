import React from "react";
import Points from "../../components/Points";
import PrazerPDF from '../../pdfsNorte/Prazer.pdf'

function Prazer() {
  
  return (
    <>
      <h1>Prazer</h1>
      <div className="video-bussola">
        <iframe src="https://www.youtube.com/embed/ZiE5zjxwstI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <Points />
      <a className="download" href={ PrazerPDF } target="_blank" rel="noreferrer">Baixar resumo</a>
    </>
  );
}

export default Prazer;
