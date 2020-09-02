import React, { Component } from 'react'
import { db } from '../../../components/firebase'
import '../ShowBlogPosts/BlogPosts.css'
import { Container, Row, Col, Card } from "react-bootstrap";


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
        <Container fluid="md" id="allBlogs">
          <Card md={ 3 } key={ Blog.title }>
            <Card.Title>
              { Blog.title }
            </Card.Title>
            <Card.Text>
              {Blog.content}
            </Card.Text>
          </Card>
        </Container>
      )
    })
  }
}

export default BlogPosts
