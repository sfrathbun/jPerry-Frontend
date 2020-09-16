import React, { PureComponent } from 'react';
import { storage } from '../firebase';
import { upload } from '../ImageUpload/ImageUpload.css'

class ImageUpload extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0
        };
   

        this.handleChange = this
            .handleChange
            .bind( this );
            this.handleUpload = this.handleUpload.bind( this );
    }
    handleChange = e =>
    {
        if ( e.target.files[ 0 ] )
        {
            const image = e.target.files[ 0 ];
            this.setState( () => ( { image } ) );
        }
    }
    handleUpload = () =>
    {
        const { image } = this.state;
        const uploadTask = storage.ref( `images/${ image.name }` ).put( image );
        uploadTask.on( 'state_changed',
            ( snapshot ) =>
            {
                const progress = Math.round( ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100 );
                this.setState( { progress } );
            },
            ( error ) =>
            {
                console.log( error );
            },
            () =>
            {
                storage.ref( 'images' ).child( image.name ).getDownloadURL().then( url =>
                {
                    console.log( url );
                    this.setState( { url } );
                } );
            } );
    };
    render ()
    {
        return (
            <div className='upload'>
                <img src={ this.state.url || 'https://i1.wp.com/lanecdr.org/wp-content/uploads/2019/08/placeholder.png?fit=1200%2C800&ssl=1' } alt="Uploaded images" height="200" width="200" />
                <progress value={ this.state.progress } max="100" />
                <br />
                <input type="file" onChange={ this.handleChange } />
                <br />
                <button className='button' onClick={ this.handleUpload }>Upload</button>
            </div>
        );
    }
}


export default ImageUpload;
