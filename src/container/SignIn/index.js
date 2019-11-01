import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faBuilding } from '@fortawesome/free-solid-svg-icons'


/**Components */
import InputCom from '../../components/InputCom';
import CheckBox from '../../components/CheckBox';
import Button from '../../components/Button';

/**Styles */
import {
   LoginBox, LoginHeader, BrandLogo, SignInBox, RememberBox
} from './styles';

import ThemeHoc from '../../Hoc/BackgroundThemeHoc';

class SignIn extends React.Component {

  constructor() {
    super();
    this.state = {
      companyName: '',
      userName: '',
      password: '',
      rememberMe: false
    }
  }

  changeInput = (e, key) => {
    this.setState({
      [key]: e.target.value
    })
  }

  changeCheckBox = () => {
    console.log('assssssss')
    this.setState({
      rememberMe: !this.state.rememberMe
    })
  }

  getInput = (obj) => {
    return (
      <InputCom
        type={obj.type}
        placeholder={obj.placeHolder}
        onChange={(e) => this.changeInput(e, obj.key)}
        value={obj.value}
        filled={obj.value && obj.value.trim() !== ''}
      />
    )
  }

  getLoginUI = () => {
    const { userName, companyName, password } = this.state;
    let inputData = [
      {
        type: 'text',
        placeHolder: 'Company Name',
        key: 'companyName',
        value: companyName,
        icon: faBuilding
      },
      {
        type: 'text',
        placeHolder: 'User Name',
        key: 'userName',
        value: userName,
        icon: faUser
      },
      {
        type: 'password',
        placeHolder: 'Password',
        key: 'password',
        value: password,
        icon: faLock
      }
    ]
    return (
      <SignInBox>
        {inputData.map((obj, index) => (
          <div className="marginBetGrid" key={index}>
            {this.getInput(obj)}
            <span className="icon">
              <FontAwesomeIcon icon={obj.icon} />
            </span>
          </div>
        ))}
        {this.getRememberMeUI()}
        {this.getSignButton()}
      </SignInBox>
    )
  }

  getSignButton = () => {
    return (
      <div className="marginBetGrid">
        <Button>
          Sign me in
      </Button>
      </div>
    )
  }

  getRememberMeUI = () => {
    const { rememberMe } = this.state;
    return (
      <div className="marginBetGrid">
        <RememberBox>
          <CheckBox checked={rememberMe} disabled={false} changeFunc={this.changeCheckBox} params="rememberMe">
            Remember Me
          </CheckBox>
        </RememberBox>
      </div>
    )
  }

  render() {
    return (
      <>
        <LoginBox>
          <LoginHeader>
            <div className="brand">
              <BrandLogo />
              <b>ADC Marvel</b> admin
            </div>
          </LoginHeader>
          {this.getLoginUI()}
        </LoginBox>
      </>
    )
  }
}

export default ThemeHoc(SignIn);