
import {
    ErrorModel,
    SuccessModel
} from './_model'
import { goodsList, goodsDetail } from './_mock'
import { goodsListInterface } from '../interface/goods/index'

export const getGoodsList = async () => {
    const result = await goodsListInterface()
    return new SuccessModel({ data: result.data })
}
export const getGoodsDetail = ({ goodsId = '' }) => {
    return new SuccessModel({
        data: goodsDetail
    })
}
