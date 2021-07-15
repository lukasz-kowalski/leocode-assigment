import { ChangeEvent } from 'react';
import styled from 'styled-components';

type PropsType = {
  value: string;
  onChange: (value: string) => void;
};

const StyledInput = styled.input``;

const TextInput = ({ value, onChange }: PropsType) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const props = {
    value,
    onChange: handleChange,
  };

  return <StyledInput {...props} />;
};

export default TextInput;
