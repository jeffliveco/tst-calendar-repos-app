import styled from "styled-components";

const FieldWrapper = styled.div`
  height: 45px;
  
  background: ${props => props.theme.color.white};
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  margin: 16px 0;
  padding: 16px;
  align-items: center;
  width: 100%;
  border: 1px solid #E5E5E5;
`;

const FieldInput = styled.input`
  font-family: ${props => props.theme.font.family.bold};
  font-style: normal;
  font-weight: bold;
  font-size: ${props => props.theme.font.size.normal}em;
  line-height: 29px;
  width: 100%;
  border: 0;
  color: ${props => props.theme.color.gray};
  letter-spacing: -0.015em;
  
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${props => props.theme.color.gray};
  }
  :-ms-input-placeholder {
    color: ${props => props.theme.color.gray};
  }
  
  &:focus {
    outline: 0;
  }
  
  &:disabled {
    background: ${props => props.theme.color.white};
    cursor: not-allowed;
  }
`;

export {FieldWrapper, FieldInput};
