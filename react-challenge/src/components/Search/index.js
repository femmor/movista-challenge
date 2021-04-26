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
  const apiUrl = 'http://api.giphy.com/v1/gifs/search'
  const api_key = '0s8YhD2rpCePplp27WvsmYEPqV1wYNE0'
  const queryString = e.target.value
  const limit = 20
  axios(`${apiUrl}`, {
    params: {
      api_key,
      q: queryString,
      limit
    }
  })
  .then(res => console.log(res.data.data))
}

export default Search
