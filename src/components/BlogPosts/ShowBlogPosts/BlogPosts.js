import React, { Component } from 'react'
import { db, storage } from '../../../app/firebase'
import '../ShowBlogPosts/BlogPosts.css'
import { Container, Row, Col, Card } from "react-bootstrap";
import '../../ImageUpload/ImageUpload';

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
