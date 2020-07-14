const defaultTextColor = '#000000'
const primary = '#ac54f2'
const secondary = '#99f253'
const dark = '#5c5c5c'
const light = '#E5CCFF'
const shadow = 'rgba(0, 0, 0, 0.4)'

const colors = {
  primary: primary,
  secondary: secondary,
  dark: dark,
  light: light,
  shadow: shadow,
  font: {
    default: defaultTextColor,
    reverse: light,
    title: primary,
    muted: dark,
    logo: defaultTextColor,
    link: primary
  },
  button: {
    default: primary,
    reverse: light
  },
  icon: {
    default: light,
    reverse: primary
  }
}

export default colors
