const initialState = {
    following: 'unfollow',
    following_status: false
}

const reducer = (state= initialState, action) => {

    const newState = {...state};

    if(action.type === 'FOLLOW_USER'){
        
    }

    return newState;

}

export default reducer;

