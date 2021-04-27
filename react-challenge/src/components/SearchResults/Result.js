import React from 'react'

const Result = ({ result }) => {
  const {images:{original}, title} = result
  return (
    <div className="col-md-4 py-2 img-container">
        <img src={original.url} className="img-fluid giph-img" alt={title} />
    </div>
  )
}

export default Result
