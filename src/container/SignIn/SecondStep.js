import React from 'react';

import { UserIdSearch, SingInModalUI, CustomButton } from '../HomePage/styles';
import { Box, CustomInput, FlexBox, CustomSelect } from './styles';

class SecondStep extends React.Component {
  render() {
    return (
      <div>
        <Box>
          <SingInModalUI width="500px">
            <div className="createAccount">
              Step 2
            </div>
            
          </SingInModalUI>
        </Box>
      </div>
    )
  }
}

export default SecondStep;