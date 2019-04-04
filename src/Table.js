import React, { Component } from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

export default class Table extends Component {
  state = {
    characters: []
  }

  componentDidMount(){
    const url = "http://localhost:3000//api/v1/basics"

    fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      this.setState({
        characters: response
      })
    })
  }


  render () {
    const { characterData, removeCharacter, editCharacter } = this.props
    const { characters } = this.state
    return(
      <table>
        <TableHeader />
        <TableBody
          characterData={characters}
          removeCharacter={removeCharacter}
          editCharacter={editCharacter}
          />
      </table>
    )
  }
}
