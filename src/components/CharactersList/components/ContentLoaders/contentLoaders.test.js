import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import React from 'react'
import ContentLoaders from './index'
import { getAllByTestId } from '@testing-library/dom'
import { render } from 'test-utils'

describe('ContentLoaders component', () => {
  test('should render properly', () => {
    const { container } = render(<ContentLoaders loading />)

    expect(container.firstChild).toMatchSnapshot()
  })

  test('should render nothing when is not loading', () => {
    const { container } = render(<ContentLoaders loading={false} />)

    const cards = getAllByTestId(container, 'characterCard')

    cards.forEach(card => {
      expect(card).toHaveStyle('display: none')
    })
  })
})
