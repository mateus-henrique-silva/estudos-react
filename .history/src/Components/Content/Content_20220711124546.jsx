import React from 'react'
import "./Content.css"
import {Switch, Route} from "react-router-dom"

const Content = props => (
    <div className="content" >
      <Switch>
        <Route path="/about">
            <About />
        </Route>
      </Switch>
    </div>

)
export default Content