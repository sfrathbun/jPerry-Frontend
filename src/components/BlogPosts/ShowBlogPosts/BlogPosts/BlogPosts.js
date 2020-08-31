import React, { Component } from 'react'
import firebase from 'firebase'
import { db } from '/Users/jhunt/Desktop/jPerry-Frontend/src/components/firebase'
import '../BlogPosts/BlogPosts.css'

class BlogPosts extends Component {
  constructor() {
    super()
    this.state = {
      Blog: [],
    }
  }

  componentDidMount() {
    // let db = firebase.database();
    db.ref('Blog/post').on('value', (snapshot) => {
      let posts = []
      snapshot.forEach((snap) => {
        posts.push(snap.val())
      })
      this.setState({ Blog: posts })
    })
  }

  render() {
    return this.state.Blog.map((Blog) => {
      return (
        <div className="div">
          <h1>Blog Posts</h1>
          <div key={Blog}>{Blog}</div>
        </div>
      )
    })
  }
}

export default BlogPosts
