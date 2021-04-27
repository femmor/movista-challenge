import React from 'react'
import {connect} from "react-redux"
import { getSearchResults } from "./action"

const Search = props => {
  return (
    <>
      <div className="form-group">
        <input 
          type="text" 
          placeholder="Search giphs..." 
          className="form-control"
          onChange={(e) => searchTextChange(e, props)}
        />
      </div>
    </>
  )
}

const searchTextChange = (e, props) => {
  if (e.target.value.trim() !== '') {
    props.getSearchResults(e.target.value)
  }
}

const mapDispatchToProps = {
  getSearchResults
}

export default connect(null, mapDispatchToProps)(Search)
