import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
      <Spinner animation="border" role="status" variant="dark">
        <span className="visually-hidden">Loading...</span>
      </Spinner >
    </div>
  )
}

export default Loading
