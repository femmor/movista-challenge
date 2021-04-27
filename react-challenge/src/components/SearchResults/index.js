import React from 'react'
import {connect} from "react-redux"

const SearchResults = props => {
  console.log(props)
  return (
    <div>
      Search Results
    </div>
  )
}

const mapStateToProps = state => {
  return {
    searchResults: state.search.get('searchResults')
  }
}

export default connect(mapStateToProps)(SearchResults)
