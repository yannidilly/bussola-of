import React, { useContext } from 'react';
import PointsContext from '../context/PointsContext';
import Seguranca from '../components/nortes/Seguranca';
import Prazer from '../components/nortes/Prazer';
import EmocoesMomentaneas from '../components/nortes/EmocoesMomentaneas';
import Conformidade from '../components/nortes/Conformidade';
import Controle from '../components/nortes/Controle';
import getNorte from '../utils/getNorte';

function Norte() {
  const { points } = useContext(PointsContext);
  const norte = getNorte(points);

  const nortePage = () => {
    let page;
    switch (norte) {
      case 'SP':
        page = <Seguranca />
        break;
      case 'PG':
        page = <Prazer />
        break;
      case 'EMD':
        page = <EmocoesMomentaneas />
        break;
      case 'CD':
        page = <Conformidade />
        break;
      case 'CF':
        page = <Controle />
        break;
    
      default:
        page = <h1>505 erro interno</h1>
        break;
    }
    return page;
  }


  return (
    <>
      {
        nortePage()
      }
    </>
  );
}

export default Norte;
