import { Container } from './styles';

import appStore from '../../assets/images/app-store.png';
import playStore from '../../assets/images/play-store.png';

function Action() {
  return (
    <Container>
      <div className='actionContainer'>
        <h1>Faça como milhares de pessoas e tenha acesso aos melhores preços também. Baixe agora!</h1>

        <div className='actionButtons'>
          <a href="https://apps.apple.com/br/app/add-mall/id1561206197" target="_blank" rel="nooperner noreferrer"><img src={appStore} alt="" /></a>
          <a href="https://play.google.com/store/apps/details?id=com.mystory.baxisite" target="_blank" rel="nooperner noreferrer"><img src={playStore} alt="" /></a>
        </div>
      </div>
    </Container>
  );
}

export default Action;