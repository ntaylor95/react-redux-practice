import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

class Post extends React.Component {
    // state = {
    //     id: null,
    //     post: null,
    //     isLoading: false
    // }
    // componentDidMount() {
    //     const postId = this.props.match.params.postId;
    //     console.log(`The post id selected is ${postId}`);
    //     this.setState({
    //         isLoading: true
    //     });
    //     axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    //     .then(res => {
    //         this.setState({
    //             post: res.data,
    //             id: postId,
    //             isLoading: false
    //         })
    //     });
    // }
    handleDelete = (e) => {
        console.log(`I am deleting ${e.target.dataset.postid}`);
        const id = e.target.dataset.postid;
        this.props.deletePost(id);
        this.props.history.push('/');
    }
    render() {
        const { post } = this.props;
        console.log(`The post is`, post);
        const postBody = post ? (
            <div className='post'>
                <h4>{post.id}</h4>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <div style={{
                    textAlign: 'center',
                    margin: 'auto',
                    padding: '20px',
                    backgroundColor: 'blue',
                    color: 'white' }} onClick={this.handleDelete} data-postid={post.id}>Delete</div>
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

// all the properties defined below, will be available in this.props
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.postId;
    const post = state.posts.find(post => {
        return parseInt(post.id) === parseInt(id);
    });
    return {
        post
    }
}

// all the functions defined below will be available in this.props
const mapDisptachToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) },
        addPost: (post) => { dispatch({type: 'ADD_POST', post: post}) },
        updatePost: (id, post) => { dispatch({type: 'UPDATE_POST', id, post})} 
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(Post);