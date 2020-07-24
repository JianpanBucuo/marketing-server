import Router from 'koa-router'
const router = new Router()
import { getGoodsList, getGoodsDetail } from '../../controller/goods'
router.post('/v1/goods/pagelist', async (ctx, next) => {
    const result = await getGoodsList()
    ctx.body = result
})

router.post('/v1/goods/pagedetail', (ctx, next) => {
    const { goodsId } = ctx.request.body
    ctx.body = getGoodsDetail({ goodsId })
})
export default router