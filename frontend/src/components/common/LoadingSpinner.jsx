import React from 'react'
import { CgSpinner } from 'react-icons/cg'

const LoadingSpinner = ({ className }) => {
  return (
    <div role="status" className={className}>
      <CgSpinner className="animate-spin " />
    </div>
  )
}

export default LoadingSpinner
