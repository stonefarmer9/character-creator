import React, { Component } from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

export default class Table extends Component {
  state = {
    characters: []
  }

  componentDidMount(){
    this.getCharacters()
  }

  componentDidUpdate(){
    this.getCharacters()
  }

  getCharacters(){
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

  removeCharacter = index => {

    const url = `http://localhost:3000//api/v1/basics/${index}`

    fetch(url,{
      method: 'DELETE'
  })
  .then((response) => {
    return response.json()
  })
  .then((response) => {
   this.setState({})
  })
  .catch(error => console.error('Error:', error));
}

  render () {
    const { editCharacter } = this.props
    const { characters } = this.state
    return(
      <table >
        <TableHeader/>
        <TableBody
          characterData={characters}
          removeCharacter={this.removeCharacter}
          editCharacter={editCharacter}
          />
      </table>
    )
  }
}
