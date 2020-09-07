import React, { Component } from 'react'
import { db } from '../../../components/firebase'
import '../ShowBlogPosts/BlogPosts.css'

class BlogPosts extends Component {
  constructor() {
    super()
    this.state = {
      Blog: [],
    }
  }

  componentDidMount() {
    db.ref('Blog/post').on('value', (snapshot) => {
      let posts = [];

      snapshot.forEach((snap) => {
        posts.push(snap.toJSON())
      });
      this.setState({ Blog: posts })
    })
  }

  render() {
    return this.state.Blog.map((Blog) => {
      return (
        <div className="div">
          {Blog.title}
          <div key={ Blog.title }>
            { Blog.content }
          </div>
        </div>
      )
    })
  }
}

export default BlogPosts
