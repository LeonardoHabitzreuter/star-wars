import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import React from 'react'
import Header from './index'
import { render } from 'test-utils'

describe('Header component', () => {
  test('should render properly', () => {
    const { container } = render(<Header />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
