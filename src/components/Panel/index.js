import React from 'react';
import styled from 'styled-components';


const PanelTile = styled.div`
  background: #fff;
  margin-left: 20px;
`;

const PanelHead = styled.div`
  background: #1d2226;
  color: #fff;
  padding: 10px 15px;
  cursor: ${({ cursor }) => cursor && 'pointer'};
`;

class Panel extends React.Component {
  render() {
    const { title, children, onClick, id } = this.props;
    return (
      <PanelTile onClick={() => onClick && onClick(id)} >
        <PanelHead cursor={onClick ? true : false}>{title}</PanelHead>
        {children}
      </PanelTile>
    );
  }
}

export default Panel;