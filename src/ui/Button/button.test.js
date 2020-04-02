import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import React from 'react'
import Button from './index'
import { fireEvent, screen } from '@testing-library/react'
import { render } from 'test-utils'

describe('Button component', () => {
  test('should render properly', () => {
    const { container } = render(<Button>Test</Button>)

    expect(container.firstChild).toMatchSnapshot()
  })

  test('should call onClick param when button was clicked', () => {
    const mockedClick = jest.fn()
    render(
      <Button onClick={mockedClick}>
        Test
      </Button>
    )

    fireEvent.click(screen.getByText('Test'))

    expect(mockedClick).toHaveBeenCalled()
  })
})
