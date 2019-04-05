import React, { Component } from 'react'

const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return(
      <center>
      <tr key={index} style={{backgroundColor: "#FED896"}}>
        <td style={{columnWidth: "500px"}}>{row.name}</td>
        <td style={{columnWidth: "500px"}}>{row.age}</td>
        <td style={{columnWidth: "500px"}}>{row.race}</td>
        <td style={{columnWidth: "500px"}}>{row.classs}</td>
        <td style={{columnWidth: "500px"}}>{row.sex}</td>
        <td style={{columnWidth: "500px"}}>{row.height}</td>
        <td style={{columnWidth: "500px"}}><button onClick={() => props.removeCharacter(row.id)}>Delete</button>
        </td>
        <td style={{columnWidth: "500px"}}><button onClick={() => props.editCharacter(index)}>Edit</button>
        </td>
      </tr>
      </center>
    )
  })
  return (
    <tbody>{rows}</tbody>
  )
}

export default TableBody;
