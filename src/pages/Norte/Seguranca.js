import React from "react";
import Points from "../../components/Points";
import SegurancaPDF from '../../pdfsNorte/Seguranca.pdf';

function Seguranca() {
  return (
    <div className="norte-seguranca">
      <h1>Segurança</h1>
      <div className="video-bussola">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZiE5zjxwstI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <Points />
      <a href={ SegurancaPDF } target="_blank" rel="noreferrer">Baixar resumo</a>
    </div>
  );
}

export default Seguranca;
