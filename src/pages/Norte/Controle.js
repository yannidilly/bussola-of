import React from "react";
import Points from "../../components/Points";
import ControlePDF from '../../pdfsNorte/Seguranca.pdf';

function Controle() {
  return (
    <div className='norte-page'>
      <h1>Controle</h1>
      <div className="video-bussola">
        <iframe src="https://www.youtube.com/embed/ZiE5zjxwstI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <Points />
      <a className="download" href={ ControlePDF } target="_blank" rel="noreferrer">Baixar resumo</a>
    </div>
  );
}

export default Controle;
