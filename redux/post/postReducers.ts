import {
     GET_POSTS_SUCCESS,
     GET_POSTS_FAILURE, 
     GET_POSTS_REQUEST} from './postTypes'

const initialState ={
    loading:false,
    posts:[],
    error:''
}

const postReducer = (state = initialState, action)=>{

    switch (action.type) {
        case GET_POSTS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case GET_POSTS_SUCCESS:
            return{
                loading:false,
                posts:action.payload
            }
        case GET_POSTS_FAILURE:
            return{
                loading:false,
                error: action.payload
            }
        default: return state
    }
}

export default postReducer