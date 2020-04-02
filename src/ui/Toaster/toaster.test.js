import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import * as theme from '/styles/theme'
import React from 'react'
import Toaster from './index'
import { render } from '@testing-library/react'

describe('Toaster component', () => {
  test('should render properly', () => {
    const { container } = render(<Toaster theme={theme} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
