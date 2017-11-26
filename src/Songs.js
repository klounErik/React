import React, {Component} from 'react'
import Song from './Song'
import {Table} from 'semantic-ui-react'

const {Row, HeaderCell, Header, Body} = Table

export default class Songs extends Component {
  state = {
    songs: [],
  }
  async componentDidMount() {
    const resp = await fetch('http://localhost:4000/api/songs')
    const data = await resp.json()
    this.setState({songs: data})
  }

  render() {
    return (
      <Table celled striped>
        <Header>
          <Row>
            <HeaderCell>Title</HeaderCell>
            <HeaderCell>Artist</HeaderCell>
            <HeaderCell>Year</HeaderCell>
          </Row>
        </Header>
        <Body>{this.state.songs.map((s, i) => <Song key={i} song={s} />)}</Body>
      </Table>
    )
  }
}
