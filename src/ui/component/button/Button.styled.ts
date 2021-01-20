import styled from "styled-components";
import {EKindButton} from "./EKindButton";

type ButtonWrapperProps = {
  kind: EKindButton;
  theme?: any;
  align?: string;
  block: boolean;
  outline: boolean;
  width?: string;
  height?: string;
}

const getBackground = (props: ButtonWrapperProps) => {
  const {kind, outline, theme} = props;
  switch (kind) {
    case EKindButton.PRIMARY: {
      if (outline) {
        return `
          color: ${theme && theme.color.yellow};
          background: ${theme && theme.color.white};
          border: 1px solid ${theme && theme.color.yellow};
        `;
      } else {
        return `
          color: ${theme && theme.color.white};
          background: ${theme && theme.color.yellow};
        `;
      }
    }

    case EKindButton.SECUNDARY: {
      if (outline) {
        return `
          color: ${theme && theme.color.gray};
          background: ${theme && theme.color.white};
          border: 1px solid ${theme && theme.color.gray};
        `;
      } else {
        return `
          color: ${theme && theme.color.white};
          background: ${theme && theme.color.gray};
        `;
      }
    }
  }
}

const setBlock = (props: ButtonWrapperProps) => {
  const {block} = props;
  if (block) {
    return `width: 100%;`;
  } else {
    return `width: 167px;`;
  }
}

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  font-family: ${props => props.theme.font.family.regular};
  font-style: normal;
  font-weight: bold;
  font-size: ${props => props.theme.font.size.normal}em;
  line-height: 17px;
  display: flex;
  justify-content: ${props => props.align ? props.align : 'center'};
  align-items: center;
  box-sizing: border-box;
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height? props.height : '40px'};
  border-radius: 10px;
  padding: 0 15px;
  margin: 14px 0;
  border: 0;
  cursor: pointer;
  ${props => getBackground(props)}
  ${props => setBlock(props)}
  &:focus {
    outline: 0;
  }
`;

export {
  ButtonWrapper
}
