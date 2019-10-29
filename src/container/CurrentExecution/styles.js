import styled from 'styled-components';

export const PagePadding = styled.div`
  padding: 20px 45px 20px 10px;
  .mt {
    margin-top: 20px;
  }
  .title {
    font-size: 24px;
    margin: 0 0 15px 20px;
  }
`;

export const PanelTile = styled.div`
  background: #fff;
  margin-left: 20px;
`;

export const PanelHead = styled.div`
  background: #1d2226;
  color: #fff;
  padding: 10px 15px;
`;

export const PanelBody = styled.div`
  padding: 15px;
`;

export const PanelWrapper = styled.div`
  padding: 10px 45px 10px 10px;
`;

export const ChartWrapper = styled.div`
  padding: 20px 20px 20px 0px;
  display: flex;
  width: calc(100% - 20px);
  .chartWidth {
    width: calc(100% / 3);
  }
  transition: height 3s ease-in-out;
`;