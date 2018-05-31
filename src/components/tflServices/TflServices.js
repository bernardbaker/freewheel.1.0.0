import React, {Component} from 'react'
import _ from 'underscore'
import './TflServices.css'

class TflServices extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      data: []
    }
  }

  componentDidCatch(error, info) {
    console.log(error)
    console.log(info)
  }

  static getDerivedStateFromProps(nextProps, prevState){
    let values = _.sortBy(nextProps.data, mode => [mode.modeName, mode.name])
    if(values.length > 0) {
      values.splice(0, 0, {'info':'Please select a service'})
      values.push({'name':'Cycle Hire'})
      return {
        data : values
      }
    }
    return null
  }

  render() {
    return (
      <div>
        <h1>TFL Services</h1>
          <select
            ref="select"
            className="Tfl-Service-List"
            onChange={this.props.handleSelection}
            id="service-types"
            key="service-types"
            value={this.props.selectedIndex}
          >
          {
            this.state.data.map((element, index, array) => {
              if(index === 0) {
                return <option
                  key={'info-'+index}
                  >
                  {element.info}
                  </option>
              }
              else if(index < array.length-1) {
                let modeName = "".concat(
                  element.modeName.toString().charAt(0).toUpperCase(),
                  element.modeName.toString().substr(1),
                  ' - ',
                  element.name,
                  (element.serviceTypes.filter(service => service.name === 'Night').length > 0 ? ' - Runs at night' : '')
                )
                const styleDisruption = element.lineStatuses.filter(status => status.statusSeverity !== 10).length > 0 ? 'Red' : 'Green'
                return <option
                  key={'service-'+index}
                  className={styleDisruption}
                  data-category={element.id}
                  data-type="service-update"
                  value={element.name.toString().toLowerCase().split(' ').join('')}
                  >
                  {modeName}
                  </option>
              } else {
                return <option
                  key={'service-'+index}
                  data-category="cycle-hire"
                  data-type="cycle-hire"
                  value="cycle-hire"
                  >
                  {element.name}
                  </option>
              }
              
            })
          }
          </select>
      </div>
    )
  }
}

export default TflServices