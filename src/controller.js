import { Controller } from 'cerebral'
import app from './state'

let devtools = null
if (process.env.NODE_ENV === 'development') {
  devtools = require('cerebral/devtools').default({
    host: 'localhost:8585',
    reconnect: true
  })
}

const controller = Controller(app, {
  devtools
})

export default controller
