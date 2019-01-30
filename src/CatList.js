import React from "react"

const CatList = (props) =>{
  console.log(props);
  return(
      <div>
      <ul>
        {props.catPics.map(cat=> <img key={cat.id}src={cat.url}></img>)}
      </ul>
      </div>
  )
}

export default CatList
