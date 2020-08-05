import React, { Fragment, Component } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import { renderRoutes, matchRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import Routes from '../render/routes'
import { getServerStore } from '../render/store/index'
export const render = async (ctx) => {
    const context = {}
    const store = getServerStore()
    const matchedRoutes = matchRoutes(Routes, ctx.path)
    const promise = []
    matchedRoutes.forEach(v => {
        // 多级路由服务端渲染
        if (v.route.loadData) {

            promise.push(v.route.loadData(store))
        }
        v.route.routes && v.route.routes.map(vIn => {
            if (vIn.loadData) {
                promise.push(vIn.loadData(store))
            }
        })
    })
    const result = await Promise.all(promise)
    // const matchedRoutes = matchRoutes(Routes, path)
    const content = renderToString((
        <Provider store={store}>
            <StaticRouter location={ctx.path} context={context}>
                <Fragment>
                    {renderRoutes(Routes)}
                </Fragment>
            </StaticRouter>
        </Provider>
    ))

    return `<html>
                <title>React ssr</title>
                <body>
                <script>
                // 开始时间
                window.pageStartTime = Date.now();
                window.navigationStart = window.performance.timing.navigationStart
                console.log('白屏时间')
                console.log(( pageStartTime - window.navigationStart ) /1000 + 's')
            </script>
                    <div id='root'>${content}</div>
                    <script>
                        window.context = {
                            state:${JSON.stringify(store.getState())}}
                    </script>
                    <script>
                    setTimeout(() => {
                        //首屏时间
                        console.log('首屏时间')
                    console.log((window.performance.timing.loadEventEnd - window.navigationStart) / 1000 + 's')
                    },1000)
                    
                    //白屏时间 = firstPaint - pageStartTime 
                </script>
                    <script src='http://localhost:4000/index.js'></script>
                    <script src='http://localhost:4000/performance.js'></script>
                </body>
            </html>`


}
