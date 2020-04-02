import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import * as theme from '/styles/theme'
import React from 'react'
import Card from './index'
import { render } from '@testing-library/react'

describe('Card component', () => {
  test('should render properly', () => {
    const { container } = render(
      <Card theme={theme}>Test</Card>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
