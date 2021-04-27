import React from 'react'
import {connect} from "react-redux"
import Result from './Result'

const SearchResults = ({ searchResults }) => {
  if (searchResults) {
    return (
      <div className="row display-panel">
          {renderSearchResults(searchResults)}
      </div>
    )
  } 
  return null
}

const renderSearchResults = searchResults => {

  return searchResults.map((result, i) => {
    return (
        <>
          {result && <Result result={result.toJS()} index={i} key={result.toJS().id}/>}
        </>
    )
  })
}

const mapStateToProps = state => {
  return {
    searchResults: state.search.get('searchResults')
  }
}

export default connect(mapStateToProps)(SearchResults)
