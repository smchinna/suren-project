import React from 'react';
import { withRouter } from 'react-router-dom';

import {  SingInModalUI, CustomButton } from '../HomePage/styles';
import { Box, CustomInput, FlexBox, CustomSelect } from './styles';

class FirstStep extends React.Component {
  
  redirectURL = (url) => {
    const { history } = this.props;
    history.push(url)
  }

  render() {
    return (
      <div>
        <Box>
          <SingInModalUI>
            <div className="createAccount">
              Step 1
            </div>
            <FlexBox marginBottom="20px">
              <CustomInput type="text" placeholder="First Name" />
              <CustomInput type="text" placeholder="Last Name" />
            </FlexBox>
            <FlexBox marginBottom="20px">
              <CustomInput type="text" placeholder="Mail" />
              <CustomInput type="text" placeholder="User" />
            </FlexBox>
            <FlexBox marginBottom="20px">
              <CustomSelect width="100px">
                <option value="">Code</option>
                <option value="china">china</option>
                <option value="brazil">Brazil</option>
                <option value="germany">germany</option>
              </CustomSelect>
              <CustomInput type="text" placeholder="Phone Number" />
              <CustomSelect width="110px">
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </CustomSelect>
            </FlexBox>
            <FlexBox marginBottom="20px">
              <CustomInput type="text" placeholder="Password" />
              <CustomInput type="text" placeholder="Confirm" />
            </FlexBox>
            <FlexBox >
              <CustomButton>Next</CustomButton>
            </FlexBox>
          </SingInModalUI>
        </Box>
      </div>
    )
  }
}

export default withRouter(FirstStep);