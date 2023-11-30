/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */


/**
 * Colors
 */
export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  //Typography
  Tombol:'#FAF0CA',
  textGray800: '#000000',
  textGray400: '#4D4D4D',
  Gray200: '#A1A1A1',
  text: '#2D2D2D',
  primary: '#E14032',
  success: '#28a745',
  bg:'#F8F5F5',
  error: '#dc3545',
 Black: '#10181F',
  //ComponentColors
  circleButtonBackground: '#E1E1EF',
  Blue: '#5C8374',
  background: '#EFEFEF',
  gray: '#CACDD4',
};

export const NavigationColors= {
  primary: Colors.primary,
 
};

/**
 * FontSize
 */
export const FontSize = {
  tiny: 14,
  small: 16,
  regular: 20,
  large: 40,
};

/**
 * Metrics Sizes
 */
const tiny = 10;
const small = tiny * 2; // 20
const regular = tiny * 3; // 30
const large = regular * 2; // 60
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
};

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
};
