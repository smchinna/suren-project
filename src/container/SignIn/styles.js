import styled from 'styled-components';

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  @media(min-width: 380px) {
    width: 400px;
  }
  .signUpText {
    padding: 0px 20px;
    color: #2d353c!important;
    font-size: 12px;
    > span {
      color: #348fe2;
      z-index: 10;
      cursor: pointer;
    }
  }
`;

export const LoginHeader = styled.div`
  padding: 0 20px;
  position: relative;
  .brand {
    font-size: 28px;
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
padding: 20px 20px 0px;
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
`;