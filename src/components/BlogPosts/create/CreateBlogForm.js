import React, { Component } from 'react'
import { db } from '../../../components/firebase'
import '../ShowBlogPosts/BlogPosts.css'
import '../../ImageUpload/ImageUpload';
import ImageUpload from '../../ImageUpload/ImageUpload';
class CreateBlogForm extends Component {
    constructor(props) {
        super(props)
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        return;
        db.ref('Blog/post').on('value', (snapshot) => {
            let posts = [];

            snapshot.forEach((snap) => {
                posts.push(snap.toJSON())
            });
            this.setState({ Blog: posts })
        })
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }


    handleSubmit(event) {
        console.log('form submited ' + this.state);
        // Get a key for a new Post.
        var newPostKey = db.ref().child('Blog/post').push().key;
        var updates = {};
        updates['Blog/post/' + newPostKey] = this.state
        db.ref().update(updates);
        event.preventDefault();
    }

    name(params) {

    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <label>
                Title:
          <input name='title' type="text" value={this.state.title} onChange={this.handleChange} />
            </label>
            <label>
                content:
            <textarea name='content' type="text" value={this.state.content} onChange={this.handleChange} >

                </textarea>

            </label>
            <input type="submit" value="Submit" />
            <ImageUpload />
        </form>
    }
}

export default CreateBlogForm
