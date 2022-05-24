import styled from 'styled-components';

export const Container = styled.section`
  position: relative;

  background-color: #fff;
  padding-top: 3.75rem; /* 98px */
  padding-bottom: 6.125rem; /* 98px */

  .actionContainer {
    max-width: 968px;
    width: calc(100% - 3rem);
    margin-left: auto;
    margin-right: auto;

    display: grid;
    gap: 2.625rem;
  }

  text-align: center;

  h1 {
    /* font-size: 1.65rem;  */
    font-size: 28px;
  }

  .actionButtons {
    display: flex;
    justify-content: center;
    /* gap: 8px; */

    
    img {
      height: 46px;
      margin-right: 8px;
    }
  }

  @media screen and (max-width: 375px) {
    .actionButtons img {
      height: 42px;
      /* margin-right: 8px; */
    }
  }

  @media screen and (min-width: 563px) {
    h1 {
      font-size: 36px;
    }
  }

  @media screen and (min-width: 740px) {
    h1 {
      font-size: 40px;
    }
  }

  @media screen and (min-width: 906px) {
    h1 {
      font-size: 50px;
    }
  }
`;