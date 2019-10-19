import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faBuilding } from '@fortawesome/free-solid-svg-icons'


/**Components */
import InputCom from '../../components/InputCom';
import CheckBox from '../../components/CheckBox';
import Button from '../../components/Button';

/**Styles */
import {
  BackGroundMaker, BackGroundGradient, LoginBox, LoginHeader,
  BrandLogo, SignInBox, RememberBox, ThemeChanger, Theme
} from './styles';

/**Images */
import SeaImg from '../../assets/images/login/sea.jpg';
import defaultImg from '../../assets/images/login/default.jpg';
import iceImg from '../../assets/images/login/Ice.jpg';
import mountainImg from '../../assets/images/login/mountain.jpg';
import redSkyImg from '../../assets/images/login/redSky.jpg';
import shipImg from '../../assets/images/login/ship.jpg';


class SignIn extends React.Component {

  constructor() {
    super();
    this.state = {
      companyName: '',
      userName: '',
      password: '',
      rememberMe: false,
      bgUrl: defaultImg,
      imageIndex: 0
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
          <CheckBox checked={rememberMe} disabled={false} onChange={() => this.changeCheckBox('rememberMe')}>Remember Me</CheckBox>
        </RememberBox>
      </div>
    )
  }

  changeTheme = (index, image) => {
    this.setState({
      imageIndex: index,
      bgUrl: image
    })
  }

  getThemeChangerUI = () => {
    const { imageIndex } = this.state;
    let data = [
      {
        url: defaultImg
      },
      {
        url: SeaImg
      },
      {
        url: iceImg
      },
      {
        url: mountainImg
      },
      {
        url: redSkyImg
      },
      {
        url: shipImg
      }
    ]
    return (
      <ThemeChanger>
        { data.map((image, index) => (
          <Theme 
            active={index === imageIndex} 
            url={image.url} 
            onClick={() => this.changeTheme(index, image.url)}
          >
            <span />
          </Theme>
        ))
        }
        </ThemeChanger>
    )
  }

  render() {
    const { bgUrl } = this.state;
    return (
      <div>
        <BackGroundMaker url={bgUrl} />
        <BackGroundGradient />
        <LoginBox>
          <LoginHeader>
            <div className="brand">
              <BrandLogo />
              <b>ADC Marvel</b> admin
            </div>
          </LoginHeader>
          {this.getLoginUI()}
        </LoginBox>
        {this.getThemeChangerUI()}
      </div>
    )
  }
}

export default SignIn;