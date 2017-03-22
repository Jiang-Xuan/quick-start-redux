import React, { Component }from 'react'
import { render } from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  componentDidMount() {

  }

  render() {
    return(
      <div>Hello, World!!!!</div>
    )
  }
}

render(<App />, document.getElementById('root'))