import * as constant from './actionTypes'
import { goodsListInterface } from '../../../server/interface/goods/index'
const getGoodsListAction = (data) => {
    return {
        type: constant.getGoodsListType,
        data
    }
}

export const getGoodsList = () => {
    return async (dispatch) => {
        const result = await goodsListInterface()
        if (result.code === '0000') {
            dispatch(getGoodsListAction(result.data))
        }
    }
}