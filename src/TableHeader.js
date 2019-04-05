import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <center>
    <thead>
      <tr style={{backgroundColor: "#FED896"}}>
        <th style={{columnWidth: "500px"}}>  Name </th>
        <th style={{columnWidth: "500px"}}>  Age  </th>
        <th style={{columnWidth: "500px"}}>  Race  </th>
        <th style={{columnWidth: "500px"}}>  Class  </th>
        <th style={{columnWidth: "500px"}}>  Sex  </th>
        <th style={{columnWidth: "500px"}}>  Height  </th>
        <th style={{columnWidth: "500px"}}></th>
        <th style={{columnWidth: "500px"}}></th>
      </tr>
    </thead>
    </center>
  )
}

export default TableHeader;
