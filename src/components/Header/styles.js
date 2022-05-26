import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);

  &::before {
    content: '';
    width: 100%;
    height: var(--header-height);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    background-color: var(--first-color);
    opacity: 0.8;
    -webkit-backdrop-filter: blur(7px);
    backdrop-filter: blur(7px);
    -ms-backdrop-filter: blur(7px);
    box-shadow: 0px 4px 12px 3px rgba(0, 0, 0, 0.25);
  }

  .headerContainer {
    max-width: 968px;
    width: calc(100% - 3rem);
    margin-left: auto;
    margin-right: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .headerButtons {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        height: 36px;
        cursor: pointer;
        margin-left: 8px;
      }
    }
  }

  @media screen and (max-width: 376px) {
    .headerContainer {
      width: calc(100% - 2rem);
    }

    .headerContainer img {
      height: 24px;
    }
  }

  @media screen and (max-width: 415px) {
    .headerContainer img {
      height: 28px;
    }

    .headerContainer .headerButtons img {
      height: 30px;
    }
  }
`;