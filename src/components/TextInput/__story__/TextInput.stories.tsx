import styled from 'styled-components';
import { Meta, Story } from '@storybook/react';
import TextInput, { PropsType } from '..';

const Container = styled.div`
  width: 30rem;
`;

export default {
  component: TextInput,
  title: 'Components/TextInput',
} as Meta;

const Template: Story<PropsType> = (args) => (
  <Container>
    <TextInput {...args} />
  </Container>
);

const handleChange = (value: string) => {};

export const DefaultLook = Template.bind({});
DefaultLook.args = { value: 'Default look', onChange: handleChange };

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = { value: '', onChange: handleChange, placeholder: 'Placeholder...' };

export const WithDisabledLook = Template.bind({});
WithDisabledLook.args = {
  value: '',
  onChange: handleChange,
  placeholder: 'Placeholder...',
  disabled: true,
};
