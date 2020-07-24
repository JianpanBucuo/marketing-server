
const { ErrorModel,
    SuccessModel } = require('./_model')
const { goodsList, goodsDetail } = require('./_mock')

const getGoodsList = async () => {

    return new SuccessModel({ data: goodsList })
}
const getGoodsDetail = ({ goodsId = '' }) => {
    console.log(goodsId)
    return new SuccessModel({
        data: goodsDetail
    })
}

module.exports = {
    getGoodsList, getGoodsDetail
}