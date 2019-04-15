import React, { Component } from 'react'

const TableHeader = () => {
  return (

    <thead>
      <tr>
        <th style={{columnWidth: "500px", color: " #331a00"}}>  Name </th>
        <th style={{columnWidth: "500px", color: " #331a00"}}>  Age  </th>
        <th style={{columnWidth: "500px", color: " #331a00"}}>  Race  </th>
        <th style={{columnWidth: "500px", color: " #331a00"}}>  Class  </th>
        <th style={{columnWidth: "500px", color: " #331a00"}}>  Sex  </th>
        <th style={{columnWidth: "500px", color: " #331a00"}}>  Height  </th>
        <th style={{columnWidth: "500px", color: " #331a00"}}></th>
        <th style={{columnWidth: "500px", color: " #331a00"}}></th>
      </tr>
    </thead>
  )
}

export default TableHeader;
