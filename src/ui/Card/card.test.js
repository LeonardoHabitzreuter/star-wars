import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import React from 'react'
import Card from './index'
import { render } from 'test-utils'

describe('Card component', () => {
  test('should render properly', () => {
    const { container } = render(<Card>Test</Card>)

    expect(container.firstChild).toMatchSnapshot()
  })
})
