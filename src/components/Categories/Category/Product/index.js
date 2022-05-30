import { Container } from './styles';

import shopButton from '../../../../assets/images/shop-button.svg';

function Product(props) {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  let pathname = `${window.location.pathname}`;

  if (pathname !== '/') {
    pathname = '/';
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return (
      <a href='https://apps.apple.com/br/app/add-mall/id1561206197?l=en' target='_blank' rel='noopener noreferrer'>
        <Container>
          <div className='productImg'>
            <img src={window.location.origin + pathname + `${props.img}`} alt='' />
          </div>
          <div className='productData'>
            <p className='description'>{props.data.description}</p>
            <p className='oldPrice'><s>de {props.data.oldPrice}</s></p>
            <p className='newPrice'>por {props.data.newPrice}</p>

            <div className='productButton'>
              <img src={shopButton} alt='' />
            </div>
          </div>
        </Container>
      </a>
    )
  }

  return (
    <a href='https://play.google.com/store/apps/details?id=com.mystory.baxisite' target='_blank' rel='noopener noreferrer'>
      <Container>
        <div className='productImg'>
        <img src={window.location.origin + pathname + `${props.img}`} alt='' />
        </div>
        <div className='productData'>
          <p className='description'>{props.data.description}</p>
          <p className='oldPrice'><s>de {props.data.oldPrice}</s></p>
          <p className='newPrice'>por {props.data.newPrice}</p>

          <div className='productButton'>
            <img src={shopButton} alt='' />
          </div>
        </div>
      </Container>
    </a>
  )
}

export default Product;
