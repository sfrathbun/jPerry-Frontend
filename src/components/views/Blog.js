import React, {Component} from 'react';
// import firebase from "firebase";
import { db } from "../firebase";


class Blog extends Component
{
  
  constructor ()
  {
    super();
    this.state = {
      Blog: []
    };
  }
  
  componentDidMount ()
  {
    // let db = firebase.database();
    db.ref( "Blog/post/title" ).on( "value", snapshot =>
    {
      let posts = [];
      snapshot.forEach( snap =>
        {
          posts.push( snap.val() );
        } );
        this.setState( { Blog: posts } );
      } );
    }
    
  render ()
  {
    return (
      this.state.Blog.map( Blog =>
      {
        return (
          <>
            <h1>Blog Posts</h1>
            <div key={ Blog.title } >
              { Blog.title }
            </div>
          </>
        );
      }
    ))
  }
};
export default Blog;
