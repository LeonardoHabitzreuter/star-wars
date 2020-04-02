import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import * as theme from '/styles/theme'
import React from 'react'
import Typography from './index'
import { render } from '@testing-library/react'

describe('Typography component', () => {
  test('should render properly', () => {
    const { container } = render(
      <Typography theme={theme}>Test</Typography>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
