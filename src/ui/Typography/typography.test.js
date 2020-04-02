import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import React from 'react'
import Typography from './index'
import { render } from 'test-utils'

describe('Typography component', () => {
  test('should render properly', () => {
    const { container } = render(<Typography>Test</Typography>)

    expect(container.firstChild).toMatchSnapshot()
  })
})
