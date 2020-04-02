import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import * as theme from '/styles/theme'
import React from 'react'
import Button from './index'
import { render, fireEvent, screen } from '@testing-library/react'

describe('Button component', () => {
  test('should render properly', () => {
    const { container } = render(
      <Button theme={theme}>Test</Button>
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  test('should call onClick param when button was clicked', () => {
    const mockedClick = jest.fn()
    render(
      <Button theme={theme} onClick={mockedClick}>
        Test
      </Button>
    )

    fireEvent.click(screen.getByText('Test'))

    expect(mockedClick).toHaveBeenCalled()
  })
})
