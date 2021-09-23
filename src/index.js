import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import Search from './Search'
import Hiding from './Hidcolumn'
import Clear from './Clear'

render (<App/>, document.getElementById('root'))

Hiding()
Search()
Clear()