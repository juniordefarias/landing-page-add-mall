import { Container } from './styles';

import appStore from '../../assets/images/app-store.png';
import playStore from '../../assets/images/play-store.png';

function Action() {
  return (
    <Container>
      <div className='actionContainer'>
        <h1>Faça como milhares de pessoas e tenha acesso aos melhores preços também. Baixe agora!</h1>

        <div className='actionButtons'>
          <a href="https://apps.apple.com/br/app/add-mall/id1561206197" target="_blank"><img src={appStore} alt="" /></a>
          <a href="#"><img src={playStore} alt="" /></a>
        </div>
      </div>
    </Container>
  );
}

export default Action;