import React, {Component} from 'react'
import './App.css'
import Songs from './Songs'
import FormExample from './FormExample'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Songs />
        <FormExample />
      </div>
    )
  }
}

export default App
