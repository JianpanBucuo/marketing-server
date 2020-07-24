import React, { Fragment, Component } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import { renderRoutes, matchRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import Routes from '../render/routes'
import { getServerStore } from '../render/store/index'
export const render = (path) => {
    const context = {}
    const store = getServerStore()
    // const matchedRoutes = matchRoutes(Routes, path)
    const content = renderToString((
        <Provider store={store}>
            <StaticRouter location={path} context={context}>
                <Fragment>
                    {renderRoutes(Routes)}
                </Fragment>
            </StaticRouter>
        </Provider>
    ))
    return `<html>
                <title>React ssr</title>
                <body>
                    <div id='root'>${content}</div>
                    <script>
                        window.context = {
                            state:${JSON.stringify(store.getState())}}
                    </script>
                    <script src='http://localhost:4000/index.js'></script>
                </body>
            </html>`
}
