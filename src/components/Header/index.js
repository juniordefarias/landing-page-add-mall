import { Container } from './styles';

import logo from '../../assets/images/logo.svg';
import appStore from '../../assets/images/app-store.png';
import playStore from '../../assets/images/play-store.png';

function Header() {
  return (
    <Container>
      <div className='headerContainer'>
        <img src={logo} alt='ADD Mall' />
        <div className='headerButtons'>
          <a href="https://apps.apple.com/br/app/add-mall/id1561206197" target="_blank" rel='nooperner noreferrer'><img className='imgButton' src={appStore} alt=""/></a>
          <a href="https://play.google.com/store/apps/details?id=com.mystory.baxisite" target="_blank" rel='nooperner noreferrer'><img className='imgButton' src={playStore} alt=""/></a>
        </div>
      </div>
    </Container>
  );
}

export default Header;