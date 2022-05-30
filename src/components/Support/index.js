import whatsapp from '../../assets/images/whatsapp-icon.svg'
import { Container } from '../Support/styles'

import { useRef } from 'react';

function Support() {

  const lastScroll = useRef(0);
  const change = useRef(0);

  function handleScroll() {
    const supportButton = document.querySelector('.supportButton');
    const categories = supportButton.nextElementSibling;
    const home = supportButton.previousElementSibling;

    if (window.screen.width >= 1280) {
      supportButton.style.opacity = '1';
      return;
    }

    if (this.scrollY + supportButton.offsetTop > categories.offsetTop && this.scrollY + supportButton.offsetTop < home.offsetHeight + categories.offsetHeight + 36) {
      supportButton.style.opacity = '0';
    }  else {
      supportButton.style.opacity = '1';
    }

    /* if (this.scrollY > lastScroll.current) {
      change.current = change.current + this.scrollY - lastScroll.current;
      if (change.current > 150) {
        supportButton.classList.remove('animated');
      }
    } else {
      change.current = 0;
      supportButton.classList.add('animated');
    }
    lastScroll.current = this.scrollY; */
  }

  window.addEventListener('scroll', handleScroll);

  return (
    <Container 
      href='https://api.whatsapp.com/send?phone=551199276371&text=Ol%C3%A1!%20Tem%20alguma%20d%C3%BAvida%20sobre%20o%20ADD%20Mall%3F%20Conta%20pra%20gente!' 
      className='supportButton'
      target="_blank" rel='nooperner noreferrer'
    >
      Fale conosco
      <img src={whatsapp} alt='suporte'/>
    </Container>
  )
}

export default Support;