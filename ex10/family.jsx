import React from 'react'
import {childrenWithProps} from '../utils/reactUtils'

export default props => (

  <div>
  <h1>Pessoas</h1>
    {childrenWithProps(props)}
  </div>

)
