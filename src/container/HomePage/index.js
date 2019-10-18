import React from 'react';
import { withRouter } from 'react-router-dom';

import CustomerCare from '../../assets/images/customer_care.png';
import Demo from '../../assets/images/demo.png';
import Camera from '../../assets/images/camera.png';
import Voice from '../../assets/images/voice.png';
import Chat from '../../assets/images/chat.png';
import Mail from '../../assets/images/mail.png';
import Call from '../../assets/images/call.png';
import ModalPopup from '../../components/ModalPopup';

import {
  MainUI, BottomUI, BottomLayer, BottomOptions, CenterUI, CustomInput, CameraImg,
  VoiceImgDiv, CustomSearchButton, SignInDiv, ContactOption, CustomButton, SingInModalUI,
  UserIdSearch, CustomModalUI, LeftCustomPopup, RightCustomPopup, ChatBox, CustomTextArea,
  MessageBox, SupportProfile, HeaderEmail, Wrapper, CallPhone, CallUsCircle
} from './styles';
import { FlexBox } from '../SignIn/styles';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: 'callUs',
      showSignIn: false,
      showPassword: false,
      password: '',
      userId: ''
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.closeRef);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.closeRef);
  }

  closeRef = (e) => {
    if (this.modalRef && !this.modalRef.contains(e.target)) {
      this.cancelModalFunc();
    }
  };


  getDialogueContactUI = () => {
    const options = [
      {
        text: 'Chat with us',
        image: Chat,
        popUpText: 'chatWithUs'
      },
      {
        text: 'Call us',
        image: Call,
        popUpText: 'callUs'
      },
      {
        text: 'Email us',
        image: Mail,
        popUpText: 'emailUs'
      }
    ]
    return (
      <ModalPopup maxWidth="sm" closeFunc={this.cancelModalFunc}>
        <ContactOption>
          {options.map((item, index) => (
            <div className="option" key={`option-${index}`}>
              <div className="flexBox" onClick={() => this.showModaFunc(item.popUpText)}>
                <img src={item.image} alt="chat" />
                <div className="text">
                  {item.text}
                </div>
              </div>
            </div>
          ))
          }
        </ContactOption>
      </ModalPopup>
    )
  }

  cancelModalFunc = () => {
    this.setState({
      modal: ''
    })
  }

  showModaFunc = (text) => {
    this.setState({
      modal: text
    })
  }

  getBottomUI = () => {
    let options = [
      {
        text: 'About'
      },
      {
        text: 'Privacy'
      },
      {
        text: 'Terms'
      },
      {
        text: 'Settings'
      }
    ]
    return (
      <BottomUI>
        <div className="customerCare">
          <div className="contact" onClick={() => this.showModaFunc('contactModal')}>
            <img src={CustomerCare} alt="CustomerCare" />
            <div className="link">
              Contact us
            </div>
          </div>
        </div>
        <BottomLayer>
          <div className="bottomFlex">
            <div>
              Mirpur
            </div>
            <BottomOptions>
              {options.map((item, index) => (
                <div className="inlineBlock" key={`bottomText-${index}`}>
                  {item.text}
                </div>
              ))}
            </BottomOptions>
          </div>
        </BottomLayer>
      </BottomUI>
    )
  }

  getCenterUI = () => {
    return (
      <CenterUI>
        <img src={Demo} alt="demo" />
        <div className="inputDiv">
          <CustomInput />
          <CameraImg>
            <img src={Camera} alt='camera' />
          </CameraImg>
          <VoiceImgDiv>
            <img src={Voice} alt='voice' />
          </VoiceImgDiv>
        </div>
        <CustomSearchButton>
          Search
        </CustomSearchButton>
      </CenterUI>
    )
  }

  redirectRoute = (url) => {
    const { history } = this.props;
    history.push(url);
  }

  changeSignIn = () => {
    this.setState({
      showSignIn: true
    })
  }

  callSignInFunc = () => {
    const { showPassword } = this.state;
    if(showPassword) {
      this.redirectRoute('/signin/step1')
    } else {
      this.setState({
        showPassword: true
      })
    }
  }

  changeInput = (e) => {
    const { showPassword } = this.state;
    if(showPassword) {
      this.setState({
        password: e.target.value
      })
    } else {
      this.setState({
        userId: e.target.value
      })
    }
  }

  getSignInUI = () => {
    const { showSignIn, showPassword, password, userId } = this.state;
    return (
      <SignInDiv>
        {showSignIn ?
          <SingInModalUI>
            <div className="flex">
              <UserIdSearch 
                type="text" 
                placeholder={showPassword ? 'Password' : "User ID" } 
                value={showPassword ? password : userId}
                onChange={(e) => this.changeInput(e)}
              />
              <CustomButton onClick={() => this.callSignInFunc()}>{showPassword ? 'Submit' : 'Next'}</CustomButton>
            </div>
            
            <div className="createAccount">
              Create account
            </div>
          </SingInModalUI>
          :
          <CustomButton onClick={() => this.changeSignIn('/signin')}>
            Sign In
        </CustomButton>
        }
      </SignInDiv>
    )
  }

  getChatWithUs = () => {
    return (
      <CustomModalUI>
        <div className="relative">
          <LeftCustomPopup ref={(a) => this.modalRef = a}>
            <ChatBox>
              <div className="top">
                <SupportProfile></SupportProfile>
                <div className="support">Support</div>
                <div></div>
              </div>
              <MessageBox>
                <CustomTextArea placeholder="Type message here..." />
              </MessageBox>
            </ChatBox>
          </LeftCustomPopup>
        </div>
      </CustomModalUI>
    )
  }

  getEmailPopUI = () => {
    return (
      <CustomModalUI>
        <div className="relative">
          <RightCustomPopup ref={(a) => this.modalRef = a}>
            <HeaderEmail>
              <div className="title">
                Send us a message
              </div>
            </HeaderEmail>
            <Wrapper>
              <div className="title">
                Name<span>*</span>
              </div>
              <div>
                <UserIdSearch type="text" width="100%" noMargin={1} noPadding={1} />
              </div>
            </Wrapper>
            <Wrapper>
              <div className="title">
                Email<span>*</span>
              </div>
              <div>
                <UserIdSearch type="text" width="100%" noMargin={1} noPadding={1} />
              </div>
            </Wrapper>
            <Wrapper>
              <div className="title">
                Type your message here<span>*</span>
              </div>
              <div>
                <CustomTextArea showBorder={1} height="66px" />
              </div>
            </Wrapper>
            <Wrapper>
              <FlexBox>
                <button>Submit</button>
              </FlexBox>
            </Wrapper>
          </RightCustomPopup>
        </div>
      </CustomModalUI>
    )
  }

  callUsPopUI = () => {
    return (
      <ModalPopup maxWidth="sm" closeFunc={this.cancelModalFunc}>
        <ContactOption>
          <CallUsCircle>

          </CallUsCircle>
          <CallPhone>
              <div className="phone">
                +91 453 786 8998
              </div>
              <div className="info">
                Mon to thu (9am to 3pm)
              </div>
          </CallPhone>
        </ContactOption>
      </ModalPopup>
    )
  }

  render() {
    const { modal } = this.state;
    return (
      <MainUI>
        {modal === 'chatWithUs' && this.getChatWithUs()}
        {modal === 'callUs' && this.callUsPopUI()}
        {modal === 'emailUs' && this.getEmailPopUI()}
        {modal === 'contactModal' && this.getDialogueContactUI()}
        {this.getSignInUI()}
        {this.getCenterUI()}
        {this.getBottomUI()}
      </MainUI>
    )
  }
}

export default withRouter(HomePage);