import Router from 'koa-router'
import { render } from '../../server.render'
const router = new Router({
})
router.get('/*', (ctx, next) => {
    ctx.body = render(ctx.path)
})
export default router 