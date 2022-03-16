enum COLORS {
  dark = "dark",
  darkO90 = "dark-o-90",
  darkO75 = "dark-o-75",
  light = "light",
  lightO90 = "light-o-90",
  lightO75 = "light-o-75",
  lightO50 = "light-o-50",
  psik = "psik",
  highbs = "highbs",
}

export default COLORS;

export type BaseTextColors = COLORS.darkO90 | COLORS.lightO90;
