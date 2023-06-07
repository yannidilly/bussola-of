import React from 'react';

function Points() {
  const points = JSON.parse(localStorage.getItem('points'));

  return (
    <div className="points">
      <p><a href="/norte/SP">Segurança</a>{ `: ${points.SP * 2}%` }</p>
      <p><a href='/norte/PG'>Prazer</a>{ `: ${points.PG * 2}%` }</p>
      <p><a href='/norte/EMD'>Emoções Momentâneas</a>{ `: ${points.EMD * 2}%` }</p>
      <p><a href="/norte/CD">Conformidade</a>{ `: ${points.CD * 2}%` }</p>
      <p><a href="/norte/CF">Controle</a>{ `: ${points.CF * 2}%` }</p>
    </div>
  )
}

export default Points;