const increment = index => {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
},

addComment = (postId , author , comment) => {
    return {
        type:'ADD_INCREMENT',
        postId,
        author,
        comment
    }
},
removeComment = (postId , i) =>{
    return {
        type:'REMOVE_COMMENT',
        postId,
        i
    }
}

export default (increment,addComment,removeComment);