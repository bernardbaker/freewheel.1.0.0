import React, {Component} from 'react'
import './ContentCycleHire.css'

class ContentCycleHire extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      results: [],
      searched: this.props.searched
    }
  }

  static getDerivedStateFromProps(nextProps, prevState){
    return Object.assign({}, prevState, {results: nextProps.results, searched: nextProps.searched})
  }

  render() {
    return (
      <div>
        <h1>Cycle hire content</h1>
        <input id="input" type="text" className="Cycle-Hire-Query-Input"/>
        <button className="Input-Button" onClick={this.props.queryCycleHireLocation}>Find cycles</button>
        <div>
            <p>
              {
                this.state.results.length ? this.state.results.length + ' search results' : this.state.searched === true ? 'Sorry no results for your search' : ''
              }
            </p>
            <ul className="Result-List">
            {
              this.state.results.map((element, index, array) => {
                return <li key={"result-"+index}><p className="Cycle-Search-Result">{element.id.substr(element.id.search('_')+1) + ' ' + element.commonName + ' (' + element.lat + ', ' + element.lon + ')'}</p></li>
              })
            }
            </ul>
        </div>
      </div>
    )
  }
}

export default ContentCycleHire