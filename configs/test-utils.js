import * as theme from '../src/styles/theme'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

const customRender = (ui, options) => render(
  ui,
  { wrapper: AllTheProviders, ...options }
)

export * from '@testing-library/react'

export { customRender as render }
