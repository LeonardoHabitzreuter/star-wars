import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import React from 'react'
import Footer from './index'
import { render } from 'test-utils'

describe('Footer component', () => {
  test('should render properly', () => {
    const { container } = render(<Footer />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
