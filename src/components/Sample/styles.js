import styled from 'styled-components';

export const MainUI = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const InlineBlockUI = styled.div`
  display: inline-block;
  width: ${({ width }) => width && `${width}%`};
  height: 100%;
  @media(max-width: 500px) {
    width: 100%;
  }
`;

export const CenterUI = styled.div`
  width: calc(100% - 6px);
  padding-bottom: 10px;
  height: 100%;
  border-left: 3px solid grey;
  border-right: 3px solid grey;
  .wrapDashboard {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const TopPanel = styled.div`
  padding: 10px;
  .box {
    height: 40px;
    border: 1.3px solid #d1cdcd;
    padding: 0px 10px;
    background-color: #f3f3f3;
    .padding {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .people {
        >svg {
          color: #bab9b9;
          padding-right: 9px;
          font-size: 17px;  
        }
        .text {
          font-size: 20px;
          font-weight: bold;
          color: #8b8989;
        }
      }
    }
  }
`;

export const EditSquare = styled.div`
  width: 32px; 
  height: 32px;
  border: 1.3px solid #d1cdcd;
`;

export const FlexBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GroupBlock = styled.div`
  width: 25%;
  .squareBlock {
    padding: 5px 8px;
  }
  @media(max-width: 1000px) {
    width: calc(100% / 3);
  }
  @media(max-width: 760px) {
    width: calc(100% / 2);
  }
`;

export const GroupSquare = styled.div`
  border: 1.4px solid black;
  height: 200px;
  border-radius: 10px;
  padding: 10px 10px 0px;
  .groupImage {
    height: 78px;
    border: 1.3px solid #d1cdcd;
    >img {
      width: 100%;
      height: 100%
    }
  }
  .details {
    border-left: 1.3px solid #d1cdcd;
    border-right: 1.3px solid #d1cdcd;
    height: 110px;
    padding: 5px 7px;
    position: relative;
    .groupName {
      font-weight: bold;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-transform: uppercase;
      font-size: 14px;
    }
    .posts {
      font-size: 12px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`;

export const LeaveGroup = styled.div`
  height: 22px;
  position: absolute;
  bottom: 8px;
  width: calc(100% - 16px);
  .button {
    cursor: pointer;
    width: 100%;
    height: 100%;
    border: 1.3px solid #d1cdcd;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #8b8989;
    font-size: 14px;
    background-color: #f3f3f3;
  }
`;

export const DashedSquare = styled.div`
  width: 80px;
  height: 80px;
  border: 2px #54c4dd dashed;
  border-radius: 4px;
  > div > svg {
    font-size: 35px;
    color: #54c4dd;
    cursor: pointer;
  }
`;

export const ButtonGroup = styled.button`
  width: 100px;
  height: 30px;
  background-color: ${({ active }) => active && 'lightblue'};
  cursor: pointer;
`;

export const ModalPopOver = styled.div`
  width: 300px;
  height: 100px;
  background-color: white;
`;

export const GlobalIconUI = styled.div`
  position: relative;
  .absolutePosition {
    position: absolute;
    right: 0px;
  }
`;
