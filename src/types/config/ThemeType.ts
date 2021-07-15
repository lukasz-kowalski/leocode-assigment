import { FontSizeType, ColorType } from 'types';

export type ThemeType = {
  colors: {
    black: ColorType.black;
    darkGrey: ColorType.darkGrey;
    grey: ColorType.grey;
  };
  fonts: {
    size: {
      h1: FontSizeType.h1;
    };
  };
};
