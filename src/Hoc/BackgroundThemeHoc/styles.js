import styled, { keyframes } from 'styled-components';

export const example = keyframes`
  0% { margin-left: 100%;}
  25% { margin-left: 75%;}
  50% { margin-left: 50%;}
  75% { margin-left: 25%;}
  100% { margin-left: 0%;}
`;

export const BackGroundMaker = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ url }) => url && `url(${url})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  // animation-name: ${example};
  // animation-duration: 1s;
  // animation-timing-function: linear;
`;

export const BackGroundGradient = styled.div`
  width: 100%;
  height: 100%;
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

export const FixedPosition = styled.div`
  position: fixed;
  left: 0;
  right: 500px;
  top: 0;
  bottom: 0;
  overflow: hidden;
`;

export const HOCWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;