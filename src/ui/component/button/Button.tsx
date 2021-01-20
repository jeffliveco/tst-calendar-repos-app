import { FC, useCallback, useRef } from "react";
import { ButtonWrapper } from "./Button.styled";
import { EKindButton } from "./EKindButton";

type ButtonProps = {
  label: string;
  kind: EKindButton;
  align?: string;
  icon?: React.ReactElement;
  onClick?: (ref: any) => void;
  block?: boolean;
  outline?: boolean;
  className?: string;
  height?: string;
  width?: string;
};

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    label,
    align,
    icon,
    onClick,
    kind,
    className,
    block = false,
    outline = false,
    width,
    height
  } = props;

  const ref: any = useRef();
  const onClickHandle = useCallback(() => {
    onClick?.(ref.current);
  }, [onClick]);
  return (
    <ButtonWrapper
      className={className}
      align={align}
      onClick={onClickHandle}
      kind={kind}
      block={block}
      outline={outline}
      ref={ref}
      width={width}
      height={height}
    >
      {icon && icon}
      {label}
    </ButtonWrapper>
  );
};

export default Button;
