import React, { Component } from 'react';

export default class ColorBox extends Component {


  state = {
    todos: [
      
    ]
  }

  render() {
    const { opacity } = this.props
    return (
      <div className="color-box" style={{opacity: opacity}}>
        <p>this.props.opacity is {opacity}</p>
      </div>
    )
  }

}

