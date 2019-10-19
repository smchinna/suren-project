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

export const LoginBox = styled.div`
  width: 400px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0 0 0 -200px;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
`;

export const LoginHeader = styled.div`
  padding: 0 20px;
  color: #fff;
  position: relative;
  .brand {
    font-size: 28px;
    color: #fff;
  }
`;

export const BrandLogo = styled.span`
  border-color: transparent rgba(0,0,0,.15) rgba(0,0,0,.3);
  border-style: solid;
  border-width: 14px;
  background-color: #00acac;
  width: 28px;
  height: 28px;
  position: relative;
  font-size: 0;
  margin-right: 10px;
  top: -11px;
  border-radius: 6px;
`;

export const SignInBox = styled.div`
  padding: 20px;
  .marginBetGrid {
    margin: 15px 0px;
    width: 100%;
    position: relative;
    .icon {
      position: absolute;
      top: 0;
      left: 15px;
      line-height: 47px;
      color: rgb(153, 153, 153);
    }
  }
`;

export const RememberBox = styled.div`
  display: flex;
  width: 100%;
  color: #fff;
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