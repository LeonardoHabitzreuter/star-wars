import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import * as theme from '/styles/theme'
import React from 'react'
import Header from './index'
import { render } from '@testing-library/react'

describe('Header component', () => {
  test('should render properly', () => {
    const { container } = render(<Header theme={theme} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
