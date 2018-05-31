import React, {Component} from 'react'
import './ContentServices.css'

class ContentServices extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      data: [],
      service: this.props.reducers.category,
      header: "",
      messages: []
    }
  }

  static getDerivedStateFromProps(nextProps, prevState){
    const data = nextProps.reducers.data.filter(e => e.id === nextProps.reducers.category)
    const header = data[0].lineStatuses.filter(e => e.statusSeverity !== 10).length === 0 ? "No service disruptions" : "Service currently suffering disruptions"
    let messages = data[0].lineStatuses.filter(e => e.statusSeverity !== 10)
    return Object.assign({}, prevState, {header, messages})
  }

  render() {
    return (
      <div>
        <h1>Service update</h1>
        <h3>{this.state.header}</h3>
        <div className={this.state.messages.length > 0 ? "Messages" : ''}>
        {
          this.state.messages.map((element, index, array) => {
            return <div key={"reason-"+index}><p>{element.reason}</p><br/></div>
          })
        }
        </div>
      </div>
    )
  }
}

export default ContentServices