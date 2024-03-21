import React from 'react'
import { IconButton, Typography, useMediaQuery } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useTheme } from '@mui/system'

export type ThemeToggleButtonProps = {
  ColorModeContext: React.Context<{ toggleColorMode: () => void }>
}

const ThemeToggleButton = (props: ThemeToggleButtonProps) => {
  const mobileCheck = useMediaQuery('(min-width: 500px)')
  const {
    ColorModeContext = React.createContext({ toggleColorMode: () => {} }),
  } = props

  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext)

  return (
    <>
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color='inherit'
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </>
  )
}

export default ThemeToggleButton
