import { FontSizeType, ThemeType, ColorType } from 'types';

const theme = (): ThemeType => {
  return {
    colors: {
      black: ColorType.black,
      darkGrey: ColorType.darkGrey,
      grey: ColorType.grey,
    },
    fonts: {
      size: {
        h1: FontSizeType.h1,
      },
    },
  };
};

export default theme;
