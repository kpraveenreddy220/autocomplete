
import * as types from "../constants"
export const filterBooks = (e) => (dispatch, getState) => {

  if (e.target.value.length >= 3) {
    let all_books = getState().books.books
    let filtered_books = []
    all_books.map(book => {
      if (book.title.toLowerCase().replace(/\s+/g, '').includes(e.target.value.toLowerCase().replace(/\s+/g, ''))) {
        //alert("hi")
        filtered_books.push(book)
      }
    })
    if(filtered_books.length>0){
   dispatch({ type:types.UPDATE_BOOKS,payload: filtered_books,error:"" })
    }else{
      dispatch({ type:types.UPDATE_BOOKS,payload: filtered_books,error:"No results found" })
    }


  }else{
    dispatch({ type:types.UPDATE_BOOKS,payload: [],error:"" })
  }
}

export const resetBooks=()=>(dispatch)=>{
  dispatch({ type:types.UPDATE_BOOKS,payload: [],error:"" })
}