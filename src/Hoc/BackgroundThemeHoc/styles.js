import styled from 'styled-components';

export const BackGroundMaker = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: ${({ url }) => url && `url(${url})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
`;

export const BackGroundGradient = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg,rgba(0,0,0,.45) 0,rgba(0,0,0,.9));
`;

export const ThemeChanger = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  margin: 0;
  padding: 0 0 0 20px;
  z-index: 1020;
  display: flex;
  flex-wrap: wrap;
`;

export const Theme = styled.div`
  width: 66px;
  height: 66px;
  overflow: hidden;
  border: 3px solid transparent;
  border-radius: 66px;
  border-color: ${({ active }) => active && '#fff'};
  : hover {
    border-color: hsla(0,0%,100%,.5)
  }
  >span {
    cursor: pointer;
    display: block;
    height: 66px;
    overflow: hidden;
    background-image: ${({ url }) => url && `url(${url})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
  }
`;