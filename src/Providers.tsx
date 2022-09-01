import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import newTheme from './theme';

const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <ThemeProvider theme={newTheme}>
      {children}
    </ThemeProvider>
  )
}

export default Providers