import React from 'react';
import { CheckMark, CheckBoxDiv, Text } from './styles';

class CheckBox extends React.Component{
  render(){
    const { disabled, checked, changeFunc } = this.props;
    return(
      <CheckBoxDiv onClick={() => changeFunc && changeFunc()}>
        <div>
          <CheckMark checked={checked} disabled={disabled}/>
        </div>
        <Text disabled={disabled} showText={!!this.props.children}>{this.props.children}</Text>
      </CheckBoxDiv>
    );
  }
}

export default CheckBox;