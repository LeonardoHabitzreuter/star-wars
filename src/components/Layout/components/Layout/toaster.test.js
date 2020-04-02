import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import React from 'react'
import Layout from './index'
import { render } from 'test-utils'

describe('Layout component', () => {
  test('should render properly', () => {
    const { container } = render(<Layout>Test</Layout>)

    expect(container.firstChild).toMatchSnapshot()
  })
})
