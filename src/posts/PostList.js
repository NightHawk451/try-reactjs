import React, { Component } from 'react'
import PostData from '../data/posts.json'

import PostDetail from './PostDetail'

class App extends Component {
  constructor (props) { // use this anytime something is called in your render
    super(props)
    this.handleDataCallback = this.handleDataCallback.bind(this)
  }
  handleDataCallback (txtMsg) {
    alert(txtMsg)
    console.log(this)
  }
  render () {
    return (
      <div>
        <h1>Hello World</h1>
        {PostData.map((item, index) => {
          return <PostDetail
            post={item}
            key={`post-list-key ${index}`}
            dataCallback={this.handleDataCallback} />
        })}

      </div>
    )
  }
}

export default App
