import { Container } from './styles';

import Product from './Product';

import eletronics from '../../../assets/mocks/eletronics';

function Category(props) {
  /* console.log(eletronics); */
  return (
    <Container>
      <h1>{props.data.title}</h1>
      <p>{props.data.subtitle}</p>
      <div className='productList'>
        {props.products.map(product => (
          <Product 
            key={product.id}
            img={product.img}
            data={{
              description: product.description,
              oldPrice: product.oldPrice,
              newPrice: product.newPrice,
            }}
          />
        ))}
      </div>
    </Container>
  );
}

export default Category;