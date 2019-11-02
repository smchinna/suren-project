import styled, { css } from 'styled-components';

export const HeadWrapper = styled.div`
  position: fixed;
  height: 50px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1020;
  margin-bottom: 0;
  padding: 0;
  background: #fff;
  -webkit-transition: box-shadow .2s linear;
  -moz-transition: box-shadow .2s linear;
  -ms-transition: box-shadow .2s linear;
  -o-transition: box-shadow .2s linear;
  transition: box-shadow .2s linear;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
`;

export const PaddingTop = styled.div`
  margin-top: 50px;
  display: flex;
`;

export const ContentWrapper = styled.div`
  margin-left: 220px;
  background-color: #d9e0e7;
  width: calc(100% - 220px);
`;

export const LeftWidth = styled.div`
  width: 220px;
  height: 100%;
  .panel {
    padding: 0px 20px;
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

export const RightWidth = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const SearchInput = styled.input`
  width: 220px;
  padding: 5px 20px;
  height: 20px;
  background: #f2f3f4;
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: none;
  border: none;
  border-radius: 30px;
  :hover {
    width: 300px;
  }
  :focus {
    width: 300px;
  }
  transition: width 0.3s ease-in-out;
`;

export const BellIconDiv = styled.div`
  height: 100%;
  width: 44px;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    > svg {
      font-size: 18px;
      cursor: pointer;
    }
  }
`;

export const Profile = styled.div`
  height: 100%;
  width: 170px;
  > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .name {
      margin-left: 10px;
    }
    >svg {
      font-size: 18px;
      padding-top: 3px;
      margin-left: 6px;
    }
  }
`;

export const SideBarWrapper = styled.div`
  position: fixed;
  width: 220px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin-top: 50px;
  background: #2d353c;
  z-index: 1010;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
  .relative {
    position: relative;
    overflow: hidden;
    width: auto;
    height: 100%;
  }
`;

export const SideProfile = styled.div`
  padding: 20px;
  color: #fff;
  background: #1a2229;
  overflow: hidden;
  position: relative;
  .info {
    font-size: 14px;
    position: relative;
    font-weight: 600;
    cursor: pointer;
    .position {
      display: block;
      color: rgba(255,255,255,.75);
      font-size: 12px;
      margin-bottom: -5px;
    }
  }
`;

export const SideBarTitle = styled.div`
  margin: 0;
  padding: 15px 20px 3px;
  line-height: 20px;
  font-size: 11px;
  color: rgba(255,255,255,.45);
  font-weight: 600;
`;

export const SideBarOptions = styled.div`
  padding: 9px 20px;
  line-height: 20px;
  color: rgba(255,255,255,.6);
  display: block;
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  ${({ active }) => active && css`
    position: relative;
    z-index: 10;
    color: #fff;
    background: #242b30;
  `}
  
  ${({ active }) => !active && css`
    :hover {
      background: 0 0;
      color: #fff;
    }
  `}
`;

export const ProfileImage = styled.div`
  width: 34px;
  height: 34px;
  margin-bottom: ${({ noMargin }) => !noMargin && '10px'};
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background: rgba(26,34,41,.75);
  border-radius: 50%;
  >img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const CoverBackground = styled.div`
  &:before {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(26,34,41,.75);
    content: '';
  }
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ url }) => url && `url(${url})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BrandLogo = styled.span`
  margin-right: 10px;
  background: #00acac;
  border: 10px solid transparent;
  border-color: transparent rgba(0,0,0,.15) rgba(0,0,0,.3);
  position: relative;
  overflow: hidden;
  -webkit-border-radius: 4px;
  border-radius: 4px;
`;