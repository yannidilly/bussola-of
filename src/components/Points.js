import React from 'react';

function Points() {
  const points = JSON.parse(localStorage.getItem('points'));

  return (
    <div className="points">
      <p><a href='/norte/SP'>{ `Segurança: ${points.SP * 2}%` }</a></p>
      <p><a href='/norte/PG'>{ `Prazer: ${points.PG * 2}%` }</a></p>
      <p><a href='/norte/EMD'>{ `Emoções Momentâneas: ${points.EMD * 2}%` }</a></p>
      <p><a href="/norte/CD">{ `Conformidade: ${points.CD * 2}%` }</a></p>
      <p><a href="/norte/CF">{ `Controle: ${points.CF * 2}%` }</a></p>
    </div>
  )
}

export default Points;