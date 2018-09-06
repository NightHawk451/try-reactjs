import React, { Component } from 'react'

// var someVar = 'hello world'

class PostDetail extends Component {
  constructor (props) {
    let someVar = 'hello there'
    super(props)
    console.log(someVar)
    if (someVar == 'hello there') {
      someVar = 'hello there my friend'
    }
    console.log(someVar)
  }
  render () {
    return (
      <h1>Hello World</h1>
    )
  }
}

export default PostDetail
