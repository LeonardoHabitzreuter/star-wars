import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import * as theme from '/styles/theme'
import React from 'react'
import Footer from './index'
import { render } from '@testing-library/react'

describe('Footer component', () => {
  test('should render properly', () => {
    const { container } = render(<Footer theme={theme} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
