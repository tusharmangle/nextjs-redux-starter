import axios from 'axios';
import{GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE} from './postTypes'

export const getPostsRequest = () => {
    return{
        type:GET_POSTS_REQUEST
    }
}

export const getPostsSuccess = (posts)=>{
    return{
        type: GET_POSTS_SUCCESS,
        payload:posts
    }
}

export const getPostsFailure = (error)=>{
    return{
        type: GET_POSTS_FAILURE,
        payload:error
    }
}

export const fetchPosts = ()=>{
return (dispatch)=>{
    dispatch(getPostsRequest())
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
        const posts = res.data
        dispatch(getPostsSuccess(posts))
    })
    .catch(err => {
        const errMsg = err.message
        dispatch(getPostsFailure(errMsg))
    })
}
}






