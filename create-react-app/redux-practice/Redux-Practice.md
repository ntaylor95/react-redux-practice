## Some useful links to help you practice:

* For fake API calls: https://jsonplaceholder.typicode.com/guide.html
* For CSS already baked in: https://materializecss.com/getting-started.html
* For Promise API fetching - Axios

## Adding redux to react
1. install redux and react-redux via npm
2. Create your rootReducer in a separate folder named reducer. He suggests starting with a 
'rootReducer.js' file and then you can aggregate all your reducers in the this single file as your
application grows. Your Reducer will define your actions and initState.
3. create your store in a base layer, in this case, we created our store in index.js.
    a. wrap your root components in <Provider store={store}>
4. now every component will have access to your redux state

## adding redux state and dispatch events to your components.
1. import { connect } from 'react-redux'; in your component
2. setup 2 functions depending on your needs and it will all look something like this:

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
        deletePost: (id) => { dispatch({type: 'DELETE_POST', id: id}) },
        addPost: (post) => { dispatch({type: 'ADD_POST', post: post}) },
        updatePost: (id, post) => { dispatch({type: 'UPDATE_POST', id, post})} 
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(Post);