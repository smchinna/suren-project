import styled from 'styled-components';

export const CheckMark = styled.span`
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  position: relative;
  height: 15px;
  width: 15px;
  background-color: ${({ checked }) => checked? '#2196F3': '#fff'};
  border: ${({ checked }) => checked? '1px solid #2196F3': '1px solid #e5e1e1'};
  border-radius: 3px;
  float: left;
  &::after {
    content: "";
    position: absolute;
    display: block;
    left: 5px;
    top: 2px;
    width: 3px;
    height: 7px;
    border-style: solid;
    border-color: ${({ checked }) => checked ? '#fff': ''};
    border-width: ${({ checked }) => checked? '0 2px 2px 0':'0'};
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    border-top-color: transparent;
    border-left-color: transparent;
  }
`;

export const CheckBoxDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  color: #2d353c;
  padding-left: ${({ showText }) => showText ? '10px' : '0'};
  font-size: 14px;
  color: ${({ disabled }) => disabled ? '#afafaf' : ''};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
`;