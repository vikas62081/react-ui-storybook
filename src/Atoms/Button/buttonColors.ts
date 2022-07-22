import { COLORS } from '../../colors';
const buttonColors = [
  //Primary
  {
    root: {
      color: COLORS.WHITE,
      background: COLORS.FIREFLY[500],
      borderColor: COLORS.FIREFLY[500],
    },
    hover: {
      background: COLORS.FIREFLY[900],
    },
    active: {},
    focus: {
      background: COLORS.FIREFLY[400],
      boxShadow: '0 0 0 0.2rem rgb(0, 149, 238,.3)', //COLORS.SHERPA["A700"]
    },
  },
  //Secondary
  {
    root: {
      color: COLORS.FIREFLY[700],
      background: COLORS.SLATE[200],
      borderColor: COLORS.SLATE[400],
    },
    hover: {
      background: COLORS.SLATE[300],
    },
    active: {},
    focus: {
      background: COLORS.SLATE[200],
      boxShadow: '0 0 0 0.2rem rgb(0, 149, 238,.3)', //COLORS.SHERPA["A700"]
    },
  },

  //Neutral
  {
    root: {
      color: COLORS.FIREFLY[700],
      background: COLORS.WHITE,
      borderColor: COLORS.SLATE[300],
    },
    hover: {
      background: COLORS.SLATE[200],
    },
    active: {},
    focus: {
      background: COLORS.WHITE,
      boxShadow: '0 0 0 0.2rem rgb(0, 149, 238,.3)', //COLORS.SHERPA["A700"]
    },
  },
  //Ghost
  {
    root: {
      color: COLORS.FIREFLY[700],
      background: COLORS.WHITE,
      borderColor: COLORS.WHITE,
    },
    hover: {
      background: COLORS.SLATE[200],
      borderColor: COLORS.SLATE[200],
    },
    active: {},
    focus: {
      background: COLORS.WHITE,
      boxShadow: '0 0 0 0.2rem rgb(0, 149, 238,.3)', //COLORS.SHERPA["A700"]
    },
  },
  //Tertiary
  {
    root: {
      color: COLORS.FIREFLY[700],
      background: COLORS.MINT[200],
      borderColor: COLORS.MINT[500],
    },
    hover: {
      color: COLORS.WHITE,
      background: COLORS.MINT[400], //not meeting expected color
      borderColor: COLORS.MINT[400],
    },
    active: {},
    focus: {
      // background: COLORS.MINT[200],
      boxShadow: '0 0 0 0.2rem rgb(77, 255, 169,.3)', //COLORS.MINT["A700"]
    },
  },
  //Destructive
  {
    root: {
      color: COLORS.FIREFLY[700],
      background: COLORS.FLAMINGO[200],
      borderColor: COLORS.FLAMINGO[300],
    },
    hover: {
      color: COLORS.WHITE,
      background: COLORS.FLAMINGO[900],
      borderColor: COLORS.FLAMINGO[900],
    },
    active: {},
    focus: {
      background: COLORS.FLAMINGO[200],
      boxShadow: '0 0 0 0.2rem rgb(255, 171, 159,.3)', //COLORS.FLAMINGO["A700"]
    },
  },
];

const colorVariant = [
  'primary',
  'secondary',
  'neutral',
  'ghost',
  'tertiary',
  'destructive',
];
export const getButtonColors = (color: any): any => {
  if (!color) {
    color = colorVariant[0];
  }
  let index = colorVariant.findIndex((value) => value === color);
  if (index < 0) {
    index = 0;
  }
  return buttonColors[index];
};
