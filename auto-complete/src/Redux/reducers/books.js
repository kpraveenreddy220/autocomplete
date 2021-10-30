
import * as types from "../constants"
const initialState = {
    books: [
        {
          title: 'Don Quixote',
          author: 'Miguel De Cervantes',
        },
        {
          title: 'Pilgrim\'s Progress',
          author: 'John Bunyan',
        },
        {
          title: 'Robinson Crusoe',
          author: 'Daniel Defoe',
        },
        {
          title: 'Gulliver\'s Travels',
          author: 'Jonathan Swift',
        },
        {
          title: 'Tom Jones',
          author: 'Henry Fielding',
        },
        {
          title: 'Clarissa',
          author: 'Samuel Richardson',
        },
        {
          title: 'Tristram Shandy',
          author: 'Laurence Sterne',
        },
      ]
      ,
      filtered_books: [],
      error:""
    
  };
  export default function (state = initialState, action) {
    switch (action.type) {
      case types.UPDATE_BOOKS:
        return {
          ...state,
          filtered_books: action.payload,
          error:action.error
        }
  
      
  
      default:
        return state;
    }
  }
  