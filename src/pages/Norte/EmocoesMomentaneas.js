import React from "react";
import Points from "../../components/Points";
import EmocoesMomentaneasPDF from '../../pdfsNorte/Emocoes-Momentaneas.pdf';

function EmocoesMomentaneas() {
  return (
    <div className="norte-emocoes-momentaneas">
      <h1>Emoções Momentâneas</h1>
      <div className="video-bussola">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZiE5zjxwstI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <Points />
      <a href={ EmocoesMomentaneasPDF } target="_blank" rel="noreferrer">Baixar resumo</a>
    </div>
  );
}

export default EmocoesMomentaneas;
