import React from 'react'
import {Table, Button} from 'semantic-ui-react'

const {Row, Cell} = Table

const Song = props => {
  const deleteSong = async () => {
    await fetch(`http://localhost:4000/api/songs/${props.song._id}`, {
      method: 'Delete',
      data: props.song._id,
    })
  }

  return (
    <Row>
      <Cell>{props.song.title}</Cell>
      <Cell>{props.song.artist}</Cell>
      <Cell>{props.song.year}</Cell>
      <Cell>
        <Button onClick={deleteSong}>Delete</Button>
      </Cell>
    </Row>
  )
}

export default Song
