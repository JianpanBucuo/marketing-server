import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { connect } from 'react-redux'
const App = (props) => {
    const { a } = props
    console.log(a)
    return (
        <div>
            <div onClick={() => alert(1)}> 111</div>
            {renderRoutes(props.route.routes)}
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        a: state.main.mainData
    }
}
export default connect(mapStateToProps)(App)