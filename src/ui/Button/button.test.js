import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import * as theme from '/styles/theme'
import React from 'react'
import Button from '/ui/Button'
import { render } from '@testing-library/react'

describe('Button component', () => {
  test('should render properly', () => {
    const { container } = render(
      <Button theme={theme}>Test</Button>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
