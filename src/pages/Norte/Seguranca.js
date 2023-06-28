import React from "react";
import Points from "../../components/Points";
import SegurancaPDF from '../../pdfsNorte/Seguranca.pdf';

function Seguranca() {
  return (
    <div className='norte-page'>
      <h1>Segurança</h1>
      <div className="video-bussola">
        <iframe src="https://www.youtube.com/embed/ZiE5zjxwstI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <Points />
      <a className="download" href={ SegurancaPDF } target="_blank" rel="noreferrer">Baixar resumo</a>
    </div>
  );
}

export default Seguranca;
