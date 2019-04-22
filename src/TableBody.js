import React, { Component } from 'react'

const TableBody = props => {

  const characters = props.characterData.map((character, index) => {
    return(
        <tr key={index}>
          <td style={{columnWidth: "500px", textAlign: "center"}}>{character.name}</td>
          <td style={{columnWidth: "500px", textAlign: "center"}}>{character.age}</td>
          <td style={{columnWidth: "500px", textAlign: "center"}}>{character.race}</td>
          <td style={{columnWidth: "500px", textAlign: "center"}}>{character.classs}</td>
          <td style={{columnWidth: "500px", textAlign: "center"}}>{character.sex}</td>
          <td style={{columnWidth: "500px", textAlign: "center"}}>{character.height}</td>
            <td style={{columnWidth: "500px", textAlign: "center"}}><button onClick={() => props.viewCharacter(character)}>Character Sheet</button>
            </td>

          <td style={{columnWidth: "500px", textAlign: "center"}}><button onClick={() => props.removeCharacter(character.id)}>Delete</button>
          </td>
          <td style={{columnWidth: "500px", textAlign: "center"}}><button onClick={() => props.editCharacter(character)}>Edit</button>
          </td>
          <td style={{columnWidth: "500px", textAlign: "center"}}><button onClick={() => props.addSkills(character)}>Add Skills</button>
          </td>

      </tr>
    )
  })
  return (

    <tbody>{characters}</tbody>
  )
}

export default TableBody;
