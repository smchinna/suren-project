import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuilding, faEnvelope, faKey, faUsers } from '@fortawesome/free-solid-svg-icons';
// import Calendar from 'ciqu-react-calendar';
import DatePicker from 'react-date-picker';
import { connect } from 'react-redux';

/**Components */
import InputCom from '../../components/InputCom';
import CheckBox from '../../components/CheckBox';
import Button from '../../components/Button';

/**Styles */
import {
  LoginBox, LoginHeader, BrandLogo, SignInBox, RememberBox
} from './styles';

import ThemeHoc from '../../Hoc/BackgroundThemeHoc';

import { fetchRegisterAPI } from '../../redux/actions';

class SignUp extends React.Component {

  constructor() {
    super();
    this.state = {
      organisationName: '',
      organisationId: '',
      email: '',
      licenceType: '',
      noOfUsers: '',
      startDate: '',
      endDate: '',
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

  changeStartDate = (date) => {
    this.setState({
      startDate: date
    })
  }

  changeEndDate = (date) => {
    this.setState({
      endDate: date
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

  registerUI = () => {
    const { organisationId, organisationName, email, licenceType, startDate, endDate, noOfUsers } = this.state;
    let obj = {
      "organizationName": organisationName,
      "organizationId": organisationId,
      "adminEmail": email,
      "licenseType": licenceType,
      "numberOfUsers": noOfUsers,
      "licenseStartDate": startDate,
      "licenseEndDate": endDate
    }
    const { registerAction } = this.props;
    registerAction(obj)
  }

  getLoginUI = () => {
    const { organisationName, organisationId, licenceType, noOfUsers, email,
      startDate, endDate } = this.state;
    let inputData = [
      {
        type: 'text',
        placeHolder: 'Organisation Name',
        key: 'organisationName',
        value: organisationName,
        icon: faBuilding
      },
      {
        type: 'text',
        placeHolder: 'Organisation Id',
        key: 'organisationId',
        value: organisationId,
        icon: faUser
      },
      {
        type: 'text',
        placeHolder: 'Admin email',
        key: 'email',
        value: email,
        icon: faEnvelope
      },
      {
        type: 'text',
        placeHolder: 'Licenece type',
        key: 'licenceType',
        value: licenceType,
        icon: faKey
      },
      {
        type: 'text',
        placeHolder: 'Number of Users',
        key: 'noOfUsers',
        value: noOfUsers,
        icon: faUsers
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
        <div className="marginBetGrid">
          <DatePicker
            value={startDate}
            onChange={this.changeStartDate}
            className="calendarUI"
          />        
        </div>
        <div className="marginBetGrid">
          <DatePicker
            value={endDate}
            onChange={this.changeEndDate}
            className="calendarUI"
            name="End Date"
          />
        </div>  
        {this.getRememberMeUI()}
        {this.getSignButton()}
      </SignInBox>
    )
  }

  getSignButton = () => {
    return (
      <div className="marginBetGrid">
        <Button onClick={() => this.registerUI()}>
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

  changeRoute = (url) => {
    const { history } = this.props;
    history.push(url);
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
          <div className="signUpText">
            Already a member? click <span onClick={() => this.changeRoute('/login')}>here</span> to login.
          </div>
        </LoginBox>
      </div>
    )
  }
}

const mapDistpatchToProps = (dispatch) => ({
  registerAction: (data) => dispatch(fetchRegisterAPI(data))
})

export default connect(null, mapDistpatchToProps)(ThemeHoc(SignUp));