import styled from 'styled-components';

export const Container = styled.section`
  max-width: 968px;
  width: calc(100% - 3rem);
  margin-left: auto;
  margin-right: auto;

  display: grid;
  justify-items: center;

  padding-top: 3.625rem; /* 58px */
  padding-bottom: 5.75rem; /* 92px */

  .homeImg {
    width: 290px;
  }

  h1 {
    font-size: var(--biggest-font-size);
    font-weight: var(--font-bold);
    color: #FFFFFF;
    margin-bottom: 1.25rem;
  }

  p {
    color: #fff;
    margin-bottom: 2rem;   
  }

  .homeButtons {
    display: flex; 
    justify-content: center;
  }

  .homeButtons img {
    height: 46px;
    margin-right: 8px;
  }

  @media screen and (max-width: 350px) {
    h1 {
      font-size: 34px;
    }
  }

  @media screen and (max-width: 376px) {
    & {
      padding: 2rem 0 3rem;

      .homeImg {
        width: 250px;
      }
    }

    .homeButtons img {
      height: 42px;
      /* margin-right: 8px; */
    }
  }

  @media screen and (min-width: 500px) {
    .homeButtons {
    display: flex; 
    justify-content: start;
  }
  }

  @media screen and (min-width: 702px) {
    & {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      justify-content: center;
    }

    .homeImg {
      order: 1;
    }
  }

  @media screen and (min-width: 906px) {
      & {
        padding: 6.5rem 0;
      }

    .homeImg {
      width: 380px;
    }
  }
`;