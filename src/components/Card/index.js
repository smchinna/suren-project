import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(100% - 30px);
  position: relative;
  color: #fff;
  padding: 15px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  background-color: ${({ bgColor }) => bgColor ? bgColor : '#348fe2!important'};
`;

const IconWidget = styled.div`
  font-size: 42px;
  height: 56px;
  width: 56px;
  text-align: center;
  line-height: 56px;
  color: rgba(0,0,0,.15);
  position: absolute;
  right: 15px;
  top: 15px;
  margin-left: 15px;
`;

const Title = styled.h4`
  font-size: 12px;
  margin: 5px 0;
  color: rgba(255,255,255,.7);
`;

const Value = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

const WidgetClicker = styled.div`
  display: block;
  margin: 15px -15px -15px;
  padding: 7px 15px;
  background: rgba(0,0,0,.4);
  text-align: right;
  color: rgba(255,255,255,.7);
`;

class Card extends React.Component {
  render() {
    const { getIcon, title, value, bgColor } = this.props;
    return(
      <Wrapper bgColor={bgColor}>
        <IconWidget>
          {getIcon && getIcon()}
        </IconWidget>
        <div>
          <Title>
            {title}
          </Title>
          <Value>
            {value}
          </Value>
        </div>
        <div>
          <WidgetClicker>
            View Detail
          </WidgetClicker>
        </div>
      </Wrapper>
    )
  }
}

export default Card;