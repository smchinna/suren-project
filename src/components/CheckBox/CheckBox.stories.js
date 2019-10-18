import React from 'react';

import { storiesOf } from '@storybook/react';

import CheckBox from './index';

storiesOf('Check Box', module)
  .add('CheckBox Types', () => <><CheckBox checked={true} disabled={false} >Checked</CheckBox>
  <CheckBox checked={false} disabled={false} >unChecked</CheckBox>
  <CheckBox checked={true} disabled={true} >disabled checked</CheckBox>
  <CheckBox checked={false} disabled={true} >disabled unChecked</CheckBox></>);