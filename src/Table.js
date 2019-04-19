import React, { Component } from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

export default class Table extends Component {


  removeCharacter = index => {
    const url = `http://localhost:3000//api/v1/basics/${index}`

    fetch(url,{
      method: 'DELETE'
  })
  .then((response) => {
    this.props.getCharacters()
  })
}

  render () {

    return(
      <table >
        <TableHeader/>
        <TableBody
          characterData={this.props.characterData}
          removeCharacter={this.removeCharacter}
          editCharacter={this.props.editCharacter}
          addSkills={this.props.addSkills}
          />
      </table>
    )
  }
}
