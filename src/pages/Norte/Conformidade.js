import React from "react";
import Points from "../../components/Points";
import ConformidadePDF from '../../pdfsNorte/Conformidade.pdf';

function Conformidade() {
  return (
    <>
      <h1>Conformidade</h1>
      <div className="video-bussola">
        <iframe src="https://www.youtube.com/embed/ZiE5zjxwstI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <Points />
      <a className="download" href={ ConformidadePDF } target="_blank" rel="noreferrer">Baixar resumo</a>
    </>
  );
}

export default Conformidade;
