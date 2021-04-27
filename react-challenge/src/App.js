import React from 'react'
import Search from "./components/Search"
import SearchResults from "./components/SearchResults"

const App = () => {
  return (
    <div className="container search-container">
      <h1 className="challenge-title">Movista Challenge</h1>
      <Search/>
      <SearchResults/>
    </div>
  );
}

export default App;
