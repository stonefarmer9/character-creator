import React, { Component } from 'react'

const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return(
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.age}</td>
        <td>{row.race}</td>
        <td>{row.classs}</td>
        <td>{row.sex}</td>
        <td>{row.height}</td>
        <td><button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    )
  })
  return (
    <tbody>{rows}</tbody>
  )
}

export default TableBody;
