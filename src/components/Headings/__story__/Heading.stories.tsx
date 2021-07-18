import { Meta } from '@storybook/react';

import { H1 } from '..';

export default {
  component: H1,
  title: 'Components/Heading',
} as Meta;

export const H1WithDefaultLook = () => <H1>Default look</H1>;
