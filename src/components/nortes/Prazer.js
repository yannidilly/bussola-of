import React, { useContext } from "react";
import PrazerPDF from '../../pdfsNorte/Prazer.pdf'
import PointsContext from "../../context/PointsContext";

function Prazer() {
  const { points } = useContext(PointsContext);
  
  return (
    <div className="norte-prazer">
      <h1>Prazer</h1>
      <div className="video-bussola">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZiE5zjxwstI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className="points">
        <p>{ `Segurança: ${points.SP}` }</p>
        <p>{ `Prazer: ${points.PG}` }</p>
        <p>{ `Emoções Momentâneas: ${points.EMD}` }</p>
        <p>{ `Conformidade: ${points.CD}` }</p>
        <p>{ `Controle: ${points.CF}` }</p>
      </div>
      <a href={ PrazerPDF } target="_blank" rel="noreferrer">Baixar resumo</a>
    </div>
  );
}

export default Prazer;
