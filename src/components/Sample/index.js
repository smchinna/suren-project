import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faGlobeAfrica, faUserFriends, faPlus } from '@fortawesome/free-solid-svg-icons'
import logo from '../../hardware.jpg';

import {
  MainUI, InlineBlockUI, CenterUI, TopPanel, EditSquare, FlexBox, GroupBlock, GroupSquare, LeaveGroup,
  DashedSquare, ButtonGroup, GlobalIconUI
} from './styles';

class Sample extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [
        {
          year: '2020',
          groupData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
        {
          year: '2021',
          groupData: [1, 2, 3, 4, 5, 6],
        },
        {
          year: '2022',
          groupData: [1, 2, 3, 4, 5, 6, 7, 8],
        },
        {
          year: '2023',
          groupData: [1, 2, 3, 4, 5],
        },
        {
          year: '2024',
          groupData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        }
      ],
      activeIndex: 0
    }
  }

  getpanelUI = () => {
    const { data, activeIndex } = this.state;
    return (
      <TopPanel>
        <div className="box">
          <div className="padding">
            <EditSquare title="Manage">
              <FlexBox>
                <FontAwesomeIcon icon={faPencilAlt} />
              </FlexBox>
            </EditSquare>
            <div className="people">
              <FontAwesomeIcon icon={faUserFriends} />
              <span className="text">{`Groups ${data[activeIndex].groupData.length}`}</span>
            </div>
            <GlobalIconUI title="Privacy">
              <FontAwesomeIcon icon={faGlobeAfrica} />
            </GlobalIconUI>
          </div>
        </div>
      </TopPanel>
    )
  }

  leaveGroup = (groupIndex) => {
    const { data, activeIndex } = this.state;
    let arr = [...data];
    arr[activeIndex].groupData.splice(groupIndex, 1);
    this.setState({
      data: arr
    })
  }

  getDashBoard = () => {
    const { data, activeIndex } = this.state;
    let arr = data[activeIndex].groupData;
    return arr.map((item, index) => (
      <GroupBlock key={`${index}-${item}-group`}>
        <div className="squareBlock">
          <GroupSquare>
            <div className="groupImage">
              <img src={logo} alt="group" />
            </div>
            <div className="details">
              <div className="groupName">
                {`Computer hardware & Software`}
              </div>
              <div className="posts">
                {`2.5K members 10+ posts a day`}
              </div>
              <LeaveGroup onClick={() => this.leaveGroup(index)}>
                <div className="button">
                  Leave
                </div>
              </LeaveGroup>
            </div>
          </GroupSquare>
        </div>
      </GroupBlock>
    ))
  }

  addGroup = () => {
    const { data, activeIndex } = this.state;
    let arr = [...data];
    arr[activeIndex].groupData.push(arr[activeIndex].groupData.length + 1);
    this.setState({
      data: arr
    })
  }

  getAddGroupUI = () => {
    return (
      <GroupBlock key={`add-group`}>
        <div className="squareBlock">
          <GroupSquare>
            <FlexBox>
              <DashedSquare>
                <FlexBox>
                  <FontAwesomeIcon icon={faPlus} onClick={() => this.addGroup()} />
                </FlexBox>
              </DashedSquare>
            </FlexBox>
          </GroupSquare>
        </div>
      </GroupBlock>
    )
  }

  chageActiveIndex = (index) => {
    this.setState({
      activeIndex: index
    })
  }

  getYearFilterUI = () => {
    const { data, activeIndex } = this.state;
    return data.map((item, index) => (
      <ButtonGroup active={index === activeIndex} onClick={() => this.chageActiveIndex(index)}>
        {item.year}
      </ButtonGroup>
    ))
  }

  render() {
    return (
      <MainUI>
        <InlineBlockUI width={50}>
          <CenterUI>
            {this.getpanelUI()}
            <div className="wrapDashboard">
              {this.getDashBoard()}
              {this.getAddGroupUI()}
            </div>
            <TopPanel>
              <FlexBox>
                {this.getYearFilterUI()}
              </FlexBox>
            </TopPanel>
          </CenterUI>
        </InlineBlockUI>
      </MainUI>
    )
  }
}

export default Sample