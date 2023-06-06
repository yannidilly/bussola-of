import React from "react";
import Points from "../Points";
import ConformidadePDF from '../../pdfsNorte/Conformidade.pdf';

function Conformidade() {
  return (
    <div className="norte-conformidade">
      <h1>Conformidade</h1>
      <div className="video-bussola">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZiE5zjxwstI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <Points />
      <a href={ ConformidadePDF } target="_blank" rel="noreferrer">Baixar resumo</a>
    </div>
  );
}

export default Conformidade;
