import React from 'react';

function Points() {
  const points = JSON.parse(localStorage.getItem('points'));

  return (
    <div className="points">
      <div className="first-points-section">
        <p><a href="/bussola-of/norte/SP">Segurança</a>{ `: ${points.SP * 2}%` }</p>
        <p><a href='/bussola-of/norte/PG'>Prazer</a>{ `: ${points.PG * 2}%` }</p>
        <p><a href='/bussola-of/norte/EMD'>Momento</a>{ `: ${points.EMD * 2}%` }</p>
      </div>
      <div className="secund-points-section">
        <p><a href="/bussola-of/norte/CD">Conformidade</a>{ `: ${points.CD * 2}%` }</p>
        <p><a href="/bussola-of/norte/CF">Controle</a>{ `: ${points.CF * 2}%` }</p>
      </div>
    </div>
  )
}

export default Points;