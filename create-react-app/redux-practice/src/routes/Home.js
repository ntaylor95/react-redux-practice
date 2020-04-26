import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.setState({
                posts: res.data.slice(0,10)
            })
        });
    }

    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className='post card' key={post.id}>
                        <div className='card-content'>
                            <div className='card-title'>
                                <Link to={`/${post.id}`}>{post.title}</Link>
                            </div>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className='center'>No Posts Yet</div>
        );

        return (
            <div className='container'>
                <h4 className='center'>Home</h4>
                {postList}
            </div>
        )
    }
}

export default Home;