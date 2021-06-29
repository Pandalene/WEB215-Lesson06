import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#8e8e8e',
      main: '#006687',
      dark: '#373755',
      contrastText: '#fffde7',
    },
    secondary: {
      light: '#ffad42',
      main: '#410000',
      dark: '#bb4d00',
      contrastText: '#fffde7',
    },
      openTitle: '#2d3a65',
      protectedTitle: '##f97a81',
      type: 'light'
    }
  })

  export default theme