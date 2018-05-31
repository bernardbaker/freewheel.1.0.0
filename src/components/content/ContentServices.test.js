import React from 'react';
import ReactDOM from 'react-dom';
import ContentContainer from './ContentContainer';
import BlankContent from './BlankContent'
import ContentServices from './ContentServices'
import ContentCycleHire from './ContentCycleHire'

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import data from '../../mock/data.json'

describe('ContentContainer component using content services for presentational component', () => {
  it('matches the snapshot', () => {
    const Component = ContentContainer(ContentServices)
    const props = {reducers:{category:'dlr', service:'service-update', data:data}}
    const tree = renderer.create(<Component {...props}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  
  it('default data when content services presentational component is created', () => {
    const Component = ContentContainer(ContentServices)
    const props = {reducers:{category:'dlr', service:'service-update', data:data}}
    const wrapper = shallow(<Component {...props}/>)
    expect(wrapper.state().content).toEqual('service-update')
  })  
})

describe('ContentContainer component using blank services for presentational component', () => {
  it('matches the snapshot', () => {
    const Component = ContentContainer(BlankContent)
    const props = {reducers:{category:'dlr', service:null, data:data}}
    const tree = renderer.create(<Component {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  
  it('default data when content services presentational component is created', () => {
    const Component = ContentContainer(BlankContent)
    const props = {reducers:{category:'dlr', service:null, data:data}}
    const wrapper = shallow(<Component {...props} />)
    expect(wrapper.state().content).toEqual(null)
  })  
})

describe('ContentContainer component using blank services for presentational component', () => {
  it('matches the snapshot', () => {
    const Component = ContentContainer(ContentCycleHire)
    const props = {reducers:{category:'cycle-hire', service:'cycle-hire', data:data}}
    const tree = renderer.create(<Component {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  
  it('default data when content services presentational component is created', () => {
    const Component = ContentContainer(ContentCycleHire)
    const props = {reducers:{category:'cycle-hire', service:'cycle-hire', data:data}}
    const wrapper = shallow(<Component {...props} />)
    expect(wrapper.state().content).toEqual('cycle-hire')
  })  
})