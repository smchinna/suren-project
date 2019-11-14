import React from 'react';
import {withRouter} from 'react-router-dom';

import { SideBarWrapper, SideProfile, SideBarTitle, SideBarOptions,
  ProfileImage, CoverBackground } from './styles';

import BackgroundUserImg from '../../assets/images/sideBar/user.jpg';

class SideBar extends React.Component {
  constructor() {
    super();
    this.state = {
      activeLink: 'dashboard'
    }
  }

  componentDidMount() {
    const { activeLink } = this.state;
    const { history } = this.props;
    
    let a = history.location.pathname.split('/') || [];
    if(a && a[1] && a[1] !== activeLink) {
      this.changeActiveLink(a[1])
    }
  }

  changeURL = (url) => {
    const { history } = this.props;
    history.push(url);
  }

  changeActiveLink = (id) => {
    this.setState({
      activeLink: id
    }, () => {
      this.changeURL(`/${id}`);
    })
  }
  
  getOptions = () => {
    const { activeLink } = this.state;
    let data = [
      {
        text: 'Dashboard',
        id: 'dashboard',
      },
      {
        text: 'Current Execution',
        id: 'current_execution'
      },
      {
        text: 'Performance Status',
        id: 'performance_status'
      },
      {
        text: 'Archived Result',
        id: 'archived_result'
      },
      {
        text: 'Defective Management',
        id: 'defective_management'
      }
    ]
    return data.map((obj, index) => (
      <SideBarOptions key={index} active={activeLink === obj.id} onClick={() => this.changeActiveLink(obj.id)}>
        {obj.text}
      </SideBarOptions>
    ))
  }

  getProfileSection = () => {
    return ( 
    <SideProfile> 
      <CoverBackground url={BackgroundUserImg} />
      <ProfileImage></ProfileImage>
      <div className="info">
        Chinna
        <small className="position">Front End Developer</small>
      </div>
    </SideProfile> 
    )
  }

  render() {
    return(
      <SideBarWrapper>
        <div className="relative">
          {this.getProfileSection()}
          <SideBarTitle>Navigation</SideBarTitle>
          {this.getOptions()}
        </div>
      </SideBarWrapper>
    )
  }
}

export default withRouter(SideBar);