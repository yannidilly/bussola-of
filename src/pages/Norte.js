import React, { useEffect, useState } from 'react';
import Seguranca from '../components/nortes/Seguranca';
import Prazer from '../components/nortes/Prazer';
import EmocoesMomentaneas from '../components/nortes/EmocoesMomentaneas';
import Conformidade from '../components/nortes/Conformidade';
import Controle from '../components/nortes/Controle';
import getNorte from '../utils/getNorte';
import { useHistory } from 'react-router-dom';

function Norte() {
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem('pesquisa') || !localStorage.getItem('points')) {
      history.push('/');
    } else {
      setLoading(false);
    }
  }, [history]);

  const points = JSON.parse(localStorage.getItem('points'));
  let norte = 'loading';

  if (!loading) {
    norte = getNorte(points)
  }

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
      case 'loading':
        page = <></>
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
