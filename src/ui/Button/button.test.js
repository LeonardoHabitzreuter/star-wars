import React from 'react'
import { shallow } from 'enzyme'
import Button from './index'

describe('Button component', () => {
  const wrapper = shallow(<Button>Test</Button>)

  test('should render properly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should call onClick when clicked', () => {
    const callback = jest.fn()
    const wrapper = shallow(<Button onClick={callback} />)
    wrapper.simulate('click')
    expect(callback).toHaveBeenCalled()
  })
})
