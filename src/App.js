import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import TflServicesContainer from './components/tflServices/TflServicesContainer'
import TflServices from './components/tflServices/TflServices'
import ContentContainer from './components/content/ContentContainer'
import BlankContent from './components/content/BlankContent'
import { serviceSelectedAction } from './actions/Actions'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  serviceSelectedAction: (val1, val2, val3) => dispatch(serviceSelectedAction(val1, val2, val3))
})

const Menu = TflServicesContainer(TflServices)
const Content = ContentContainer(BlankContent)

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="Left-Column">
          <Menu {...this.props}/>
        </div>
        <div className="Right-Column">
          <Content {...this.props}/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
