import { ChangeEvent } from 'react';
import styled from 'styled-components';

export type PropsType = {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
};

const StyledInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  outline-color: ${({ theme }) => theme.colors.darkGrey};
`;

const TextInput = ({ value, onChange, placeholder, disabled }: PropsType) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const props = {
    value,
    onChange: handleChange,
    placeholder,
    disabled,
  };

  return <StyledInput {...props} />;
};

export default TextInput;
