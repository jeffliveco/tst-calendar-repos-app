import React, {useState} from "react";
import {FieldWrapper, FieldInput} from "./Field.styled";

type FieldProps = {
  type: string;
  value?: string;
  icon?: React.ReactElement;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

const Field: React.FC<FieldProps> = (props: FieldProps) => {
  const {type, icon, placeholder, value, onChange, disabled} = props;
  const [fieldValue, setFieldValue] = useState(value);

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setFieldValue(newValue);
    if (onChange) onChange(newValue);
  }

  return (
    <FieldWrapper>
      {icon && icon}
      <FieldInput
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        value={fieldValue}
        onChange={onChangeHandle}
      />
    </FieldWrapper>
  );
}

export default Field;