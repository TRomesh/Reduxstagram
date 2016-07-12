function postcomments(state = [],action){
   switch (action.type) {
     case 'ADD_COMMENT':
         return [...state,{
           user:action.author,
           text:action.comment
         }];
       break;
       case 'REMOVE_COMMENT':
          return [...state.slice(0,action.i),
                    state.slice(action.i+1)];
         break;
     default:

   }
  return state;
}

function comments(state = [],action){
  if(typeof action.postId !== 'undefined'){
     return{
       ...state,
       [action.postId]: postcomments(state[action.postId],action)
     }
  }


  return state;
}

export default comments;
