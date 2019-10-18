import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
  outline: none;
  border: none;
  width: 100%;
  height: 40px;
  background-color: ${({ bgColor }) => bgColor ? bgColor : '#17b7a9'};
  border-radius: 3px;
  color: white;
  cursor: pointer;
  font-size: 16px;
`;

class Button extends React.Component {
  render() {
    return (
      <CustomButton {...this.props}>
        {this.props.children}
      </CustomButton>
    )
  }
}

export default Button;