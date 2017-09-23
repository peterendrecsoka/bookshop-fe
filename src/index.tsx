import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from "./app"

render((
    <div>
    <BrowserRouter basename="/bookshop-fe">
        <App />
    </BrowserRouter>
    </div>
), document.getElementById('root'))
