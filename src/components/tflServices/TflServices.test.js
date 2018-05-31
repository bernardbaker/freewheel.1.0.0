import React from 'react';
import ReactDOM from 'react-dom';
import TflServicesContainer from './TflServicesContainer';
import TflServices from './TflServices'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'

import { createStore } from 'redux'
import reducers from '../../reducers'  

const store = createStore(reducers)

const DELAY_MS = 2000

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

describe('TflServicesContainer component', () => {
  it('matches the snapshot', () => {
    const Component = TflServicesContainer(TflServices)
    const tree = renderer.create(<Component />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  
  it('default data when created', () => {
    const Component = TflServicesContainer(TflServices)
    const wrapper = shallow(<Component />)
    expect(wrapper.state().data).toEqual([])
  })
  
  it('call for data when mounted', async () => {
    const ORIGINAL_TIMEOUT = jasmine.DEFAULT_TIMEOUT_INTERVAL
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
    const Component = TflServicesContainer(TflServices)
    const wrapper = shallow(<Component />)
    await wrapper.instance().componentDidMount()
    await sleep(DELAY_MS + 5000)
    expect(wrapper.state().data.length).toBeGreaterThan(0)
    jasmine.DEFAULT_TIMEOUT_INTERVAL = ORIGINAL_TIMEOUT
  })
  
})