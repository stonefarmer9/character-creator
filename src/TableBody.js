import React, { Component } from 'react'
import './TableBody.css'

const TableBody = props => {

  const characters = props.characterData.map((character, index) => {
    return(
        <tr className="Row" key={index}>
          <td style={{columnWidth: "500px", textAlign: "center"}}>{character.name}</td>
          <td style={{columnWidth: "500px", textAlign: "center"}}>{character.age}</td>
          <td style={{columnWidth: "500px", textAlign: "center"}}>{character.race}</td>
          <td style={{columnWidth: "500px", textAlign: "center"}}>{character.classs}</td>
          <td style={{columnWidth: "500px", textAlign: "center"}}>{character.sex}</td>
          <td style={{columnWidth: "500px", textAlign: "center"}}>{character.height}</td>
            <td style={{columnWidth: "500px", textAlign: "center"}}><button className="viewCharacter" onClick={() => props.viewCharacter(character)}>Character Sheet</button>
            </td>

          <td style={{columnWidth: "500px", textAlign: "center"}}><button className="removeCharacter" onClick={() => props.removeCharacter(character.id)}>Delete</button>
          </td>
          <td style={{columnWidth: "500px", textAlign: "center"}}><button className="editCharacter" onClick={() => props.editCharacter(character)}>Edit</button>
          </td>
          <td style={{columnWidth: "500px", textAlign: "center"}}><button className="addSkills" onClick={() => props.addSkills(character)}>Add Skills</button>
          </td>

      </tr>
    )
  })
  return (

    <tbody>{characters}</tbody>
  )
}

export default TableBody;
