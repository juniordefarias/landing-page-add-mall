import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 12px 3px rgba(0, 0, 0, 0.1);

  .productImg {
    img {
      width: 100%;
    }
  }

  .productData {
    padding: 8px 16px 12px;

    .description {
      color: #000;
      font-size: var(--small-font-size);
      min-height: 45px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .oldPrice {
      font-size: var(--smaller-font-size);
      color: var(--text-color);
    }

    .newPrice {
      color: var(--first-color);
      margin-bottom: 8px;
    }

    .productButton {
      text-align: end;
    }
  }
`;