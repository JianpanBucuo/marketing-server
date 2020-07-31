import Router from 'koa-router'
import { render } from '../../server.render'
const router = new Router({
})
router.get('/*', async (ctx, next) => {
    ctx.body = await render(ctx)
})
export default router 