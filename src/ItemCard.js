import React, { Component } from 'react';


export default class ItemCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: []
    }
  }

  getItem = () => {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const url = this.props.url

    fetch(proxyUrl + url, {
      method: 'GET',
    })
    .then((response) => {
      console.log(response)
      console.log("got to first then")
      return response.json()
    })
    .then((response) => {
      console.log("second then")
      this.setState({
        item: response
      })
    })
  }

  render(){
    console.log(this.state.item)
    return(
      <div className='itemCard'>
      Hello world
      </div>
    )
  }

}
