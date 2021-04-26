import React from 'react'
import axios from 'axios'

const Search = () => {
  return (
    <>
      <div className="form-group">
        <input 
          type="text" 
          placeholder="Search giphs..." 
          className="form-control"
          onChange={searchTextChange}
        />
      </div>
    </>
  )
}

const searchTextChange = (e) => {
  
}

export default Search
