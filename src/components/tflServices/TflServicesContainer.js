import React from 'react'

export default function (Component) {
  return class Container extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        data: [],
        selectedIndex: 0
      }

      this.handleSelection = this.handleSelection.bind(this)
    }

    handleSelection(event) {
      const category = event.target.options[event.target.selectedIndex].getAttribute('data-category')
      const type = event.target.options[event.target.selectedIndex].getAttribute('data-type')
      this.setState({
        selectedIndex: event.target.options[event.target.selectedIndex].value
      })
      this.props.serviceSelectedAction(category, type, this.state.data)
    }
    
    render() {
      return <Component {...this.props} data={this.state.data} handleSelection={this.handleSelection} selectedIndex={this.state.selectedIndex} />
    }

    componentDidCatch(error, info) {
      console.log(error)
      console.log(info)
    }

    componentDidMount() {
      fetch('https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true')
      .then(response => {
        let res = response.json();
        res.then(payload => {
          this.setState(prevState => ({
              data: prevState.data = payload
          }))
        })
      })
    }
  }  
}