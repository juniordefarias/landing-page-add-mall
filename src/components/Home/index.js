import { Container } from './styles';

import mockup from '../../assets/images/mockup.png';
import appStore from '../../assets/images/app-store.png';
import playStore from '../../assets/images/play-store.png';

function Home() {
  return (
    <Container>
      <img className='homeImg' src={mockup} alt='ADD Mall' />
      <div className='homeData'>
        <h1>Compre com mais facilidade com o ADD Mall</h1>
        <p>Descubra o novo lugar onde todos estão comprando. Tudo o que você procura, com os melhores preços, em um único lugar. Baixe o app agora mesmo!</p>

        <div className='homeButtons'>
        <a href="https://apps.apple.com/br/app/add-mall/id1561206197" target="_blank" rel='nooperner noreferrer'><img src={appStore} alt=""/></a>
        <a href="https://play.google.com/store/apps/details?id=com.mystory.baxisite" target="_blank" rel='nooperner noreferrer'><img src={playStore} alt=""/></a>
        </div>
      </div>
    </Container>
  );
}

export default Home;
