import React from 'react';
import axios from 'axios';

class Post extends React.Component {
    state = {
        id: null,
        post: null,
        isLoading: false
    }
    componentDidMount() {
        const postId = this.props.match.params.postId;
        console.log(`The post id selected is ${postId}`);
        this.setState({
            isLoading: true
        });
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => {
            this.setState({
                post: res.data,
                id: postId,
                isLoading: false
            })
        });
    }
    render() {
        const postBody = this.state.post ? (
            <div className='post'>
                <h4>{this.state.id}</h4>
                <h1>{this.state.post.title}</h1>
                <p>{this.state.post.body}</p>
            </div> 
        ) : (
            <div className='center'>Data is Loading</div>
        );   
        return (
            <div className='container'>
                {postBody}
            </div>
            
        )
    }
}

export default Post;