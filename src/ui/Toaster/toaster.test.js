import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import React from 'react'
import Toaster from './index'
import { render } from 'test-utils'

describe('Toaster component', () => {
  test('should render properly', () => {
    const { container } = render(<Toaster />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
