import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import { HeadWrapper, PaddingTop, LeftWidth, SearchInput, BellIconDiv,
  RightWidth, Profile, ContentWrapper, BrandLogo, ProfileImage } from './styles';

import BackgroundUserImg from '../../assets/images/sideBar/user.jpg';

import Sidebar from './Sidebar';

const HeaderHoc = (WrapComponent) => {
  class Header extends React.Component {
    
    getLeftUI = () => {
      return (
        <LeftWidth>
          <div className="panel">
            <BrandLogo />
            ADC Admin
          </div>
        </LeftWidth>
      )
    }

    getRightUI = () => {
      return(
        <RightWidth>
          <SearchInput type="text"/>
          <BellIconDiv>
            <div>
              <FontAwesomeIcon icon={faBell} />
            </div>
          </BellIconDiv>
          <Profile>
            <div>
              <ProfileImage noMargin={1}>
                <img src={BackgroundUserImg} alt="profile"/>
              </ProfileImage>
              <span className="name">SM Chinna</span>  
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </Profile>
        </RightWidth>
      )
    }

    render() {
      return(
        <>
          <HeadWrapper>
           {this.getLeftUI()}
           {this.getRightUI()}
          </HeadWrapper>
          <PaddingTop>
            <Sidebar />
            <ContentWrapper>
              <WrapComponent />
            </ContentWrapper>
          </PaddingTop>
        </>
      )
    }
  }
  return Header
}

export default HeaderHoc;