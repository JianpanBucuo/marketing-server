import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Routes from '../render/routes'
import { Provider } from 'react-redux'
import { getClientStore } from '../render/store/index'

const getApp = () => {
    return (
        <Provider store={getClientStore()}>
            <BrowserRouter>
                <Fragment>
                    {renderRoutes(Routes)}
                </Fragment>
            </BrowserRouter>
        </Provider>
    )
}
ReactDom.hydrate(getApp(), document.getElementById('root'))