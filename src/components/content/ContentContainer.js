import React from 'react'
import ContentServices from './ContentServices'
import ContentCycleHire from './ContentCycleHire'

export default function (Component) {
  return class Container extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        content: this.props.reducers.service,
        queryCycleHireLocationResults: [],
        searched: false
      }

      this.queryCycleHireLocation = this.queryCycleHireLocation.bind(this)
    }

    queryCycleHireLocation(event) {
      if(document.getElementById('input').value.toString().length < 1) {
        this.setState(prevState => ({
          queryCycleHireLocationResults: prevState.queryCycleHireLocationResults = [],
          searched: prevState.searched = true
        }))
        return
      } 
      const query = document.getElementById('input').value
      fetch(`https://api.tfl.gov.uk/BikePoint/Search?query=${query}`)
      .then(response => {
        let res = response.json();
        res.then(payload => {
          this.setState(prevState => ({
            queryCycleHireLocationResults: prevState.queryCycleHireLocationResults = payload,
            searched: prevState.searched = true
          }))
        })
      })
    }

    static getDerivedStateFromProps(nextProps, prevState){
      return Object.assign({}, prevState, {content: nextProps.reducers.service})
    }
    
    render() {
      
      switch(this.state.content) {
        case 'cycle-hire' :
          return <ContentCycleHire queryCycleHireLocation={this.queryCycleHireLocation} results={this.state.queryCycleHireLocationResults} searched={this.state.searched}/>
        case 'service-update' :
          return <ContentServices {...this.props} />
        default :
          return <Component message="Welcome to the TFL info widget" />
      }
    }

    componentDidCatch(error, info) {
      console.log(error)
      console.log(info)
    }

    componentWillUnmount() {
      
    }
  }  
}