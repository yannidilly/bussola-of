import React from 'react';

function Points() {
  const points = JSON.parse(localStorage.getItem('points'));

  return (
    <div className="points">
      <p>{ `Segurança: ${points.SP}` }</p>
      <p>{ `Prazer: ${points.PG}` }</p>
      <p>{ `Emoções Momentâneas: ${points.EMD}` }</p>
      <p>{ `Conformidade: ${points.CD}` }</p>
      <p>{ `Controle: ${points.CF}` }</p>
    </div>
  )
}

export default Points;