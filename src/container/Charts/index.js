import React from 'react';
import styled from 'styled-components';

import Card from '../../components/Card/index';

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

class Charts extends React.Component {
  render() {
    return (
      <div>
        <Width>
          <div className="flexDiv">
            <Card title="Total Visitors" value="3,32,434,223" />
          </div>
        </Width>
        <Width>
          <div className="flexDiv">
            <Card title="Total Visitors" value="3,32,434,223" bgColor="#49b6d6" />
          </div>
          
        </Width>
        <Width>
          <div className="flexDiv">
            <Card title="Total Visitors" value="3,32,434,223" />
          </div>
        </Width>
        <Width>
          <div className="flexDiv">
            <Card title="Total Visitors" value="3,32,434,223" />
          </div>
        </Width>
      </div>
    );
  }
}

export default Charts;