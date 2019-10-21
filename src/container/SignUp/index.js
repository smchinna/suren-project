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

class SignUp extends React.Component {

  constructor() {
    super();
    this.state = {
      companyName: '',
      email: '',
      password: '',
      confirmPassword: '',
      rememberMe: false
    }
  }

  changeInput = (e, key) => {
    this.setState({
      [key]: e.target.value
    })
  }

  changeCheckBox = () => {
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
    const { userName, companyName, password, confirmPassword } = this.state;
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
        placeHolder: 'Email',
        key: 'email',
        value: userName,
        icon: faUser
      },
      {
        type: 'password',
        placeHolder: 'Password',
        key: 'password',
        value: password,
        icon: faLock
      },
      {
        type: 'Re-enter password',
        placeHolder: 'Confirm Password',
        key: 'confirmPassword',
        value: confirmPassword,
        icon: faLock
      }
    ]
    return (
      <SignInBox>
        {inputData.map((obj, index) => (
          <div className="marginBetGrid" key={index}>
            {this.getInput(obj)}
            {obj.icon &&
              <span className="icon">
                <FontAwesomeIcon icon={obj.icon} />
              </span>
            }
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
          Sign Up
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
            Sign Up, you agree to our <span>Terms</span> and that you have read our <span>Data Policy</span>, including our <span>Cookie Use</span>.
          </CheckBox>
        </RememberBox>
      </div>
    )
  }

  render() {
    return (
      <div>
        <LoginBox>
          <LoginHeader>
            <div className="brand">
              <BrandLogo />
              Create your <b>ADC Account</b>
            </div>
          </LoginHeader>
          {this.getLoginUI()}
        </LoginBox>
      </div>
    )
  }
}

export default ThemeHoc(SignUp);