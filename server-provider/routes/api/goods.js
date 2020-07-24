const router = require('koa-router')()
const { getGoodsList, getGoodsDetail } = require('../../controller/goods')
router.post('/goods-provider/v1/goods/pagelist', async (ctx, next) => {
    console.log('in')
    const result = await getGoodsList()
    ctx.body = result
})

router.post('/goods-provider/v1/goods/pagedetail', (ctx, next) => {
    const { goodsId } = ctx.request.body
    console.log(goodsId, 'goodsId')
    ctx.body = getGoodsDetail({ goodsId })
})
module.exports = router