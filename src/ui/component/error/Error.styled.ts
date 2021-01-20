import styled from "styled-components";

const ErrorWrapper = styled.div`
  width: 100%;
  margin: 5px 0;
`;

const ErrorBox = styled.div`
  background-color: ${(props => props.theme.color.red)};
  color: ${(props => props.theme.color.lightGray)};
  padding: 10px;
  
  border-radius: 5px;
  box-sizing: border-box;
  
  h2 {
    margin: 0;
    padding: 0;
    font-size: ${(props => props.theme.font.size.normal)};
  }
  span {
    display: block;
    margin-left: 10px;
    font-size: ${(props => props.theme.font.size.small)};
  }
`;

export {
  ErrorWrapper,
  ErrorBox
}
