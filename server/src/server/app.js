import Koa from 'koa'
import json from 'koa-json'
import onerror from 'koa-onerror'
import bodyparser from 'koa-bodyparser'
import logger from 'koa-logger'
import koaRouter from 'koa-router'
import goods from './routes/api/goods'
import page from './routes/view/index'
import { resolve, join } from 'path'
const app = new Koa()
const router = new koaRouter()
// error handler
onerror(app)

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(resolve('public')))
app.use(require('koa-static')(resolve('client-dist')))

// logger
app.use(async (ctx, next) => {
    console.log(ctx.path)
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
router.use('/view', page.routes(), page.allowedMethods())
router.use(goods.routes(), goods.allowedMethods())
app.use(router.routes(), router.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
})
export default app
