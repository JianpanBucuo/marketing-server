import httpRequest from '../axios/index'

export const goodsListInterface = () => {
    return httpRequest.request({
        url: 'http://localhost:9000/goods-provider/v1/goods/pagelist',
        method: 'POST'
    })
}
