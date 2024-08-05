import React from 'react'
import {formatDistanceToNow} from 'date-fns'

const Timer = ({timestamp}) => {
  return (
    <>
        <span>
            <small>{formatDistanceToNow(new Date(timestamp), {addSuffix : true })}</small>
        </span>
    
    </>
  )
}

export default Timer