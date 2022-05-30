import styled from 'styled-components';

export const Container = styled.a`
  position: fixed;
  bottom: 36px;
  right: 24px;

  font-size: 12px;
  font-weight: 600;

  background-color: #fff;
  color: #329F40;
  display: flex;
  align-items: center;
  height: 36px;
  padding-left: calc(18px + 4px);
  padding-right: 12px;
  border-radius: 0 42px 42px 0;

  box-shadow: -8px 4px 12px 3px rgba(0, 0, 0, 0.2);

  transition: all 200ms ease-out;
  
  /* opacity: 0;
  transform: translate3d(0,30px,0); */
  
  &.animated {
    opacity: 1;
    /* transform: translate3d(0,0,0); */
  }

  img {
    position: absolute;
    top: 0;
    left: -18px;
    height: 36px;
  }
`;