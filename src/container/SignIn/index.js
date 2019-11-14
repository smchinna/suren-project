import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';

/**Components */
import InputCom from '../../components/InputCom';
import CheckBox from '../../components/CheckBox';
import Button from '../../components/Button';

/**Styles */
import {
   LoginBox, LoginHeader, BrandLogo, SignInBox, RememberBox
} from './styles';

/**HOC */
import ThemeHoc from '../../Hoc/BackgroundThemeHoc';

/**Actions */
import { fetchLoginAPI } from '../../redux/actions';

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
    const { userName, password } = this.state;
    let inputData = [
      // {
      //   type: 'text',
      //   placeHolder: 'Company Name',
      //   key: 'companyName',
      //   value: companyName,
      //   icon: faBuilding
      // },
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

  submitSignInFunc = () => {
    const { loginAction } = this.props;
    const { userName, password } = this.state;
    loginAction({ userName, password });
  }

  getSignButton = () => {
    return (
      <div className="marginBetGrid">
        <Button onClick={() => this.submitSignInFunc()}>
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

  changeRoute = (url) => {
    const { history } = this.props;
    history.push(url);
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
          <div className="signUpText">
            Not a member yet? click <span onClick={() => this.changeRoute('/register')}>here</span> to register.
          </div>
        </LoginBox>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginAction: (data) => dispatch(fetchLoginAPI(data))
})

export default connect(null, mapDispatchToProps)(ThemeHoc(SignIn));