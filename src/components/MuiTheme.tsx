'use client'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import React, { ReactNode } from 'react'

const theme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#FFF',
      secondary: '#e2e2e2',
    },
    divider: '#FFF',
    background: {
      default: '#de3137',
      paper: '#de3137',
    },
    primary: {
      light: '#f2db86',
      main: '#F4D35E',
      dark: '#ebc744',
      contrastText: '#FFF',
    },
    secondary: {
      light: '#ec8588',
      main: '#F15156',
      dark: '#e7272e',
      contrastText: '#FFF',
    },
  },
})

interface MuiThemeprops {
  children: ReactNode
}

const MuiTheme = ({ children }: MuiThemeprops) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default MuiTheme
