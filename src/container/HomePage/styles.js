import styled from 'styled-components';

export const MainUI = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const BottomUI = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;
  .customerCare{
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-bottom: 20px;
    .contact{
      margin-right: 20px;
      cursor: pointer;
      position: relative;
      >img {
        height: 82px;  
      }
      .link {
        font-size: 12px;
        text-align: center;
        color: #427dde;
      }
    }
  }
`;

export const BottomLayer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #eaeaea;
  border-top: 1px solid lightgray;
  .bottomFlex {
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const BottomOptions = styled.div`
  .inlineBlock {
    display: inline-block;
    margin-left: 20px;
    font-weight: 500;
  }
`;

export const CenterUI = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  >img {
    width: 200px;
  }
  .inputDiv {
    height: 40px;
    width: 500px;
    position: relative;
    z-index: 10;
    border: 1px solid #eaeaea;
    border-radius: 30px;
    margin-top: 25px;
  }
`;

export const CustomInput = styled.input`
  height: calc(100% - 4px);
  width: calc(100% - 94px);
  margin: 0px 45px;
  border: none;
  outline: none;
  font-size: 18px;
  background-color: transparent;
  :hover {
    border: none;
    outline: none;
  }
  :focus {
    border: none;
    outline: none;
  }
`;

export const CameraImg = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
  > img {
    width: 18px;
    cursor: pointer;
  }
`;

export const VoiceImgDiv = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  > img {
    width: 18px;
    cursor: pointer;
  }
`;

export const CustomSearchButton = styled.button`
  outline: none;
  border: none;
  width: 120px;
  height: 30px;
  background-color: #eaeaea;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
`;

export const SignInDiv = styled.div`
  padding: 20px 0px 0px 20px;
  position: relative;
  z-index: 10;
`;

export const CustomButton = styled.button`
  outline: none;
  border: none;
  width: 90px;
  height: 30px;
  background-color: #427dde;
  border-radius: 3px;
  color: white;
  cursor: pointer;
`;

export const ContactOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .option {
    .flexBox {
      display: flex;
      align-items: center;
      flex-direction: column;
      cursor: pointer;
      >img {
        width: 56px;
      }    
      .text {
        margin-top: 5px;
        text-align: center;
        color: #00adff;
      }
    }
  }
`;

export const UserIdSearch = styled.input`
  height: 40px;
  width: ${({ width }) => width ? width : '275px'};
  margin: ${({ noMargin }) => !noMargin && '0px 15px 0 0'};
  padding:  ${({ noPadding }) => !noPadding && '0px 15px'};
  border: 1px solid #eaeaea;
  outline: none;
  font-size: 16px;
  border-radius: 6px;
  :hover {
    border: 1px solid #eaeaea;
    outline: none;
  }
  :focus {
    border: 1px solid #eaeaea;
    outline: none;
  }
`;

export const SingInModalUI = styled.div`
  margin-bottom: 20px;
  width: ${({ width }) => width ? width : '400px'};
  .createAccount {
    margin-top: 10px;
    font-size: 18px;
    color: #03A9F4;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .flex {
    display: flex;
    align-items: center;
  }
`;

export const CustomModalUI = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: 100;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  .relative {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
`;

export const LeftCustomPopup = styled.div`
  position: absolute;
  width: 400px;
  height: calc(100vh - 100px);
  background-color: white;
  top: 50px;
  left: 50px;
  background-color: lightgrey;
  padding: 10px;
`;

export const ChatBox = styled.div`
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  background-color: white;
  border-radius: 12px;
  padding: 15px;
  position: relative;
  .top {
    display: flex
    align-items: center;
    .support {
      margin-left: 10px;
    }
  }
`;

export const RightCustomPopup = styled.div`
  position: absolute;
  width: 400px;
  height: calc(100vh - 100px);
  background-color: white;
  top: 50px;
  right: 50px;
`;

export const CustomTextArea = styled.textarea`
  width: 100%;
  outline: none;
  border: ${({ showBorder }) => showBorder ? '1px solid #eaeaea' : 'none'};
  height: ${({height}) => height && height};
  font-size: 16px;
`;

export const MessageBox = styled.div`
  position: absolute;
  bottom: 10px;
  width: calc(100% - 30px);
`;

export const SupportProfile = styled.div`
  width: 60px;
  height: 60px;
  background-color: lightgray;
  border-radius: 50%;
`;

export const HeaderEmail = styled.div`
  height: 60px;
  width: 100%;
  background-color: orange;
  display: flex;
  align-items: center;
  color: white;
  .title {
    margin-left: 30px;
    font-size: 20px;
  }  
`;

export const Wrapper = styled.div`
  padding: 25px 25px 0px;
  .title {
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: bold;
    > span {
      color: red;
      margin-left: 5px;
    }
  }
`;

export const CallPhone = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
  color: #039BE5;
  font-weight: bold;
  .phone {
    font-size: 54px;
  }
  .info {
    font-size: 24px;
  }
`;

export const CallUsCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: black;
`;

