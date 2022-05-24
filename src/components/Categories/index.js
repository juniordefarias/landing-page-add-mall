import { Container } from './styles';

import Category from './Category';

import clothes from '../../assets/mocks/clothes';
import eletronics from '../../assets/mocks/eletronics';
import utilities from '../../assets/mocks/utilities';

function Categories() {
  return (
    <Container>
      <Category
        data={{
          title: 'Vestuário',
          subtitle: 'Temos uma grande variedade de roupas e acessórios'
        }}
        products={clothes}
      />

      <Category
        data={{
          title: 'Eletrônicos',
          subtitle: 'Temos desde pilhas até a câmera GoPro'
        }}
        products={eletronics}
      />

      <Category
        data={{
          title: 'Utilitários',
          subtitle: 'Complete a sua cozinha com os nossos produtos essenciais'
        }}
        products={utilities}
      />
    </Container>
  );
}

export default Categories;