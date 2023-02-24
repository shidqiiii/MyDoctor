const mainColors = {
  green1: '#0bcad4',
  dark1: '#112340',
  dark2: '#495a75',
  grey1: '#7d8797',
  grey2: '#e9e9e9',
  white1: '#ffffff',
  black1: '#000000',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  white: mainColors.white1,
  black: mainColors.black1,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    menuInactive: mainColors.dark2,
    menuActive: mainColors.green1,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: mainColors.white1,
    },
    secondary: {
      background: mainColors.white1,
      text: mainColors.dark1,
    },
  },
  border: mainColors.grey2,
};
