import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import React from 'react'
import CharacterCard from './index'
import { render } from 'test-utils'

describe('CharacterCard component', () => {
  test('should render properly', () => {
    const { container } = render(
      <CharacterCard
        id='1'
        name='Luke Skywalker'
        height='172'
        mass='77'
        birth_year='19BBY'
        gender='male'
      />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
