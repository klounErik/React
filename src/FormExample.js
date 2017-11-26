import React, {Component} from 'react'
import {Button, Form} from 'semantic-ui-react'

class FormExample extends Component {
  state = {
    title: '',
    artist: '',
    year: '',
  }
  handleSubmit = async () => {
    const {title, artist, year} = this.state
    const json = JSON.stringify({title, artist, year})
    console.log(json)
    await fetch('http://localhost:4000/api/songs', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title, artist, year}),
    })
  }

  handleChange = (e, {name, value}) => this.setState({[name]: value})

  render() {
    const {title, artist, year} = this.state
    return (
      <Form size="tiny" onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input required placeholder="Title" name="title" value={title} onChange={this.handleChange} />
          <Form.Input required placeholder="Artist" name="artist" value={artist} onChange={this.handleChange} />
          <Form.Input required placeholder="Year" name="year" value={year} onChange={this.handleChange} />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

export default FormExample
