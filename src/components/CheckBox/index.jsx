import React from 'react';
import { CheckMark, CheckBoxDiv, Text } from './styles';

class CheckBox extends React.Component{
  render(){
    const { disabled, checked, onChange } = this.props;
    return(
      <CheckBoxDiv onClick={() => onChange && onChange()}>
        <CheckMark checked={checked} disabled={disabled}/>
        <Text disabled={disabled} showText={!!this.props.children}>{this.props.children}</Text>
      </CheckBoxDiv>
    );
  }
}

export default CheckBox;