import styled from 'styled-components';

export const Box = styled.div`
  min-width: 500px;
  padding: 20px 10px;
  border: 1px solid #dadce0;
`;

export const FullWidth = styled.div`
  width: 100%;
  height: 100vh;
`;

export const FlexBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ marginBottom }) => marginBottom && marginBottom };
`;

export const CustomInput = styled.input`
  height: 40px;
  width: ${({ width }) => width ? width : '250px'};
  margin: 0px 15px;
  padding: 0px 15px;
  border: 1px solid #eaeaea;
  outline: none;
  font-size: 16px;
  border-radius: 6px;
  :hover {
    outline: 1.2px solid #3e54ceba;
  }
  :focus {
    outline: 1.2px solid #3e54ceba;
  }
`;

export const CustomSelect = styled.select`
  height: 40px;
  width: ${({ width }) => width ? width : '250px'};
  margin: 0px 15px;
  padding: 0px 15px;
  border: 1px solid #eaeaea;
  outline: none;
  font-size: 16px;
  border-radius: 6px;
  :hover {
    outline: 1.2px solid #3e54ceba;
  }
  :focus {
    outline: 1.2px solid #3e54ceba;
  }
`;

/**After */
export const GridWidth = styled.div`
  width: ${({ largeWidth }) => largeWidth ? largeWidth : '100%' };
  display: inline-block;
  vertical-align: top;
  height: 100%;
  background-color ${({ bgColor }) => bgColor ? bgColor : 'white'};
  @media(max-width: 1200px) {
    width: ${({ mediumWidth }) => mediumWidth ? mediumWidth : '100%' };
  }
  @media(max-width: 600px) {
    width: ${({ smallWidth }) => smallWidth ? smallWidth : '100%' };
  }
`;

export const SignInBox = styled.div`
  width: 70%;
  margin: 0px 15%;
  .marginBetGrid {
    margin: 15px 0px;
    width: 100%;
    position: relative;
    .icon {
      position: absolute;
      top: 0;
      left: 15px;
      line-height: 47px;
      color: rgb(153, 153, 153);
    }
  }
`;

export const RememberBox = styled.div`
  display: flex;
  width: 100%;
`;