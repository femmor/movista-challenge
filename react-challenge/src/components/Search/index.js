import React from 'react'

const Search = () => {
  return (
    <>
      <form>
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Search giphs..." 
            className="form-control"
            onChange={handleFormChange}
          />
        </div>
      </form>
    </>
  )
}

const handleFormChange = (e) => {
  e.preventDefault()
  console.log(e.target.value)
}

export default Search
