import React from 'react';
import { withRouter } from 'react-router-dom';

import InputCom from '../../components/InputCom';
import CheckBox from '../../components/CheckBox';
import Button from '../../components/Button';

import { FullWidth, FlexBox, GridWidth, SignInBox, RememberBox } from './styles';

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

  changeCheckBox = (key) => {
    this.setState({
      [key]: !this.state[key]
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
          <CheckBox checked={rememberMe} disabled={false} onChange={() => this.changeCheckBox('rememberMe')}>Remember Me</CheckBox>
        </RememberBox>
      </div>
    )
  }

  render() {
    const { userName, companyName, password } = this.state;
    let inputData = [
      {
        type: 'text',
        placeHolder: 'Company Name',
        key: 'companyName',
        value: companyName
      },
      {
        type: 'text',
        placeHolder: 'User Name',
        key: 'userName',
        value: userName
      },
      {
        type: 'password',
        placeHolder: 'Password',
        key: 'password',
        value: password
      }
    ]
    return (
      <FullWidth>
        <GridWidth largeWidth="65%" bgColor="lightblue" mediumWidth="50%">

        </GridWidth>
        <GridWidth largeWidth="35%" mediumWidth="50%">
          <FlexBox>
            <SignInBox>
              <div className="marginBetGrid">

              </div>
              {inputData.map((obj, index) => (
                <div className="marginBetGrid" key={index}>
                  {this.getInput(obj)}
                </div>
              ))}
              {this.getRememberMeUI()}
              {this.getSignButton()}
            </SignInBox>
          </FlexBox>

        </GridWidth>
      </FullWidth>
    )
  }
}

export default withRouter(SignIn);