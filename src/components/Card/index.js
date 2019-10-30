import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const Width = styled.div`
  width: 25%;
  display: inline-block;
  .flexDiv {
    margin-left: 20px;
    width: calc(100% - 20px);
    margin-bottom: 20px;
  }
  @media(max-width: 1150px) {
    width: 50%; 
  }
  @media(max-width: 700px) {
    width: 100%;
  }
`;

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
  >svg {
    font-size: 56px;
  }
`;

const Title = styled.h4`
  font-size: 13px;
  text-transform: uppercase;
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
  >svg {
    margin-left: 5px;
    font-size: 14px;
  }
`;

class Card extends React.Component {
  render() {
    const { title, value, bgColor, Icon } = this.props;
    return (
      <Width>
        <div className="flexDiv">
          <Wrapper bgColor={bgColor}>
            <IconWidget>
              {Icon && <Icon />}
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
                <FontAwesomeIcon icon={faArrowCircleRight} />
            </WidgetClicker>
            </div>
          </Wrapper>
        </div>
      </Width>
    )
  }
}

export default Card;