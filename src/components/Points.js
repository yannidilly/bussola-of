import React from 'react';

function Points() {
  const points = JSON.parse(localStorage.getItem('points'));

  return (
    <div className="points">
      <p><a href='/norte/SP'>{ `Segurança: ${points.SP}` }</a></p>
      <p><a href='/norte/PG'>{ `Prazer: ${points.PG}` }</a></p>
      <p><a href='/norte/EMD'>{ `Emoções Momentâneas: ${points.EMD}` }</a></p>
      <p><a href="/norte/CD">{ `Conformidade: ${points.CD}` }</a></p>
      <p><a href="/norte/CF">{ `Controle: ${points.CF}` }</a></p>
    </div>
  )
}

export default Points;