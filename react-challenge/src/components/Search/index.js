import React from 'react'
import {connect} from "react-redux"
import { getSearchResults } from "./action"

const Search = props => {
  return (
      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
          <input 
            type="text" 
            placeholder="Search giphs..." 
            className="form-control"
            onChange={(e) => searchTextChange(e, props)}
          />
        </div>
        </div>
      </div>
  )
}

const searchTextChange = async (e, props) => {
  if (e.target.value.trim() !== '') {
    props.getSearchResults(e.target.value)
  }
}

const mapDispatchToProps = {
  getSearchResults
}

export default connect(null, mapDispatchToProps)(Search)
