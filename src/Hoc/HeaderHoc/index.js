import React from 'react';

import { HeadWrapper, PaddingTop, LeftWidth, SearchInput, BellIconDiv,
  RightWidth, Profile, ContentWrapper, BrandLogo } from './styles';

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

          </BellIconDiv>
          <Profile>

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