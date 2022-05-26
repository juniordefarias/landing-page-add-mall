import styled from 'styled-components';

export const Container = styled.div`
  & > h1 {
    font-size: var(--h1-font-size);
    font-weight: var(--font-semi-bold);
    margin-bottom: 0.5rem; /* 8px */
  }

  & > p {
    font-weight: var(--font-semi-bold);
    color: var(--text-color);
  }

  & > *:not(.productList) {
    margin-left: 1.5rem; /* 24px */
  }

  .productList {
    display: grid;
    gap: 16px;
    grid-auto-flow: column;
    grid-auto-columns: 40%;

    overflow-x: auto;
    overscroll-behavior-inline: contain;

    scrollbar-width: none;

    padding: 1.875rem 24px; /* 30px */
  }

  @media screen and (max-width: 376px) {
    & > *:not(.productList) {
      margin-left: 1rem; 
    }

    .productList {
      padding: 1.875rem 16px;
    }

    h1 {
      font-size: 1.75rem;
    }
  }

  @media screen and (min-width: 500px) {
    & {
      max-width: 968px;
      width: calc(100% - 3rem);
      margin-left: auto;
      margin-right: auto;
    }

    & > *:not(.productList) {
      margin-left: 0;
    }

    .productList {
      grid-auto-flow: row;
      /* Para quantidade de produtos por categoria igual a 5 ou 6, por favor usar: grid-template-columns: repeat(3, 1fr);*/
      /* Para quantidade de produtos por categoria diferente de 5, por favor usar: grid-template-columns: repeat(2, 1fr); */
      grid-template-columns: repeat(2, 1fr);
      padding: 30px 12px 48px;
    }
  }

  /* Layout conforme o número de produtos por categoria */

  /* Se a quantidade de produtos por categoria for igual a 4 */
  @media screen and (min-width: 650px) {
    .productList {
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      grid-template-rows: 1fr;
    }
  }

  /* Se a quantidade de produtos por categoria for igual a 5 */
  /* @media screen and (min-width: 814px) {
    .productList {
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      grid-template-rows: 1fr;
    }
  } */

  /* Se a quantidade de produtos por categoria for igual a 6 */
  /* @media screen and (min-width: 855px) {
    .productList {
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      grid-template-rows: 1fr;
    }
  } */
`;