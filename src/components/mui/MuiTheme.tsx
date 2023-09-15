'use client'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import React, { ReactNode } from 'react'

const theme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: 'rgb(248, 250, 252)',
      secondary: '#e2e2e2',
    },
    divider: 'rgb(248, 250, 252)',
    background: {
      default: '#de3137',
      paper: '#dc242a',
    },
    primary: {
      light: '#f2db86',
      main: '#F4D35E',
      dark: '#ebc744',
      contrastText: 'rgb(248, 250, 252)',
    },
    secondary: {
      light: '#ec8588',
      main: '#F15156',
      dark: '#e7272e',
      contrastText: 'rgb(248, 250, 252)',
    },
    info: {
      light: '#2471b9',
      main: '#13528c',
      dark: '#0D3B66',
      contrastText: 'rgb(249, 252, 248)',
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
