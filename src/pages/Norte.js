// SP, PG, EMD, CD, CF
import Seguranca from '../components/nortes/Seguranca';
import Prazer from '../components/nortes/Prazer';
import EmocoesMomentaneas from '../components/nortes/EmocoesMomentaneas';
import Conformidade from '../components/nortes/Conformidade';
import Controle from '../components/nortes/Controle';

function Norte() {
  const norte = 'SP';

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
