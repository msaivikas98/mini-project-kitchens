import {Component} from 'react'

class CheckingFunctionPassing extends Component {
  childMethod = () => {
    console.log('triggered')
  }

  render() {
    return <h1>hello world</h1>
  }
}

export default CheckingFunctionPassing
