const initialState = []

export const catsReducer = (state = initialState, action) =>{
  switch (action.type) {
    case "FETCH_CATS":
      // console.log(action);
      return action.catPics
    // case "LOADING_CATS":
    //   return "Loading"

    default:
      return state
  }
}
