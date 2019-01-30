export const fetchCats = () => (dispatch) => {
  return fetch('http://localhost:4000/db')
    .then(res => res.json())
    .then(catPics => dispatch({type: "FETCH_CATS",catPics: catPics.images}) )
}
