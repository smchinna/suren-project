import styled, {keyframes} from 'styled-components';

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
  flex-direction: row;
  .chartWidth {
    width: calc(100% / 3);
  }
  @media(max-width: 900px) {
    flex-direction: column;
    .chartWidth {
      width:100%
    }
  }
`;

export const TableWrapper = styled.div`
  margin-left: 20px;
  width: calc(100% - 20px);
`;

export const GridWidth = styled.div`
  width: ${({ width }) => width ? width : '100%'};
  background-color: ${({ bgColor }) => bgColor ? bgColor : '#fff'};
  display: inline-block;
  padding: 15px 0px;
  text-align: center;
  border: 0.5px solid white;
`;

export const FlexItem = styled.div`
  display: flex;
  justify-content: ${({ justifyCon }) => justifyCon && justifyCon};
  flex-wrap: ${({ wrap }) => wrap && 'wrap'};
`;

const keyFrameExampleOne = keyframes`
  0% {
    height: 0%;
  }
  25% {
    height: 25%; 
  }
  100% {
    height: 100%;
  }
`

export const TransitionDiv = styled.div`
  height: ${props => props.open ? "100%" : "0"};
  animation-name: ${keyFrameExampleOne};
  animation-duration: 4s;
  animation-timing-function: linear
  overflow: hidden;
`;

export const InfoCard = styled.div`
  min-width: 200px;
  margin: 10px 20px 30px;
  max-width: 25%;
  .card-title {
    padding: 10px 0px;
    background-color: #92d3de;
    >div {
      padding: 0px 5px;
      text-align: center;
    }
  }
  .card-value {
    padding: 10px 0px;
    border: 1px solid #92d3de;
    > div {
      padding: 0px 5px;
      text-align: center;
    }
  }
`;