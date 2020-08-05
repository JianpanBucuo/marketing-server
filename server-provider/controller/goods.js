
const { ErrorModel,
    SuccessModel } = require('./_model')
const { goodsList, goodsDetail } = require('./_mock')
const test = function delay (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, time);
    });
};
const getGoodsList = () => {
    return new Promise(resolve => {
        setTimeout(function () {
            console.log('in settimeout')
            resolve(new SuccessModel({ data: goodsList }))
        }, 0)
    })
}
const getGoodsDetail = ({ goodsId = '' }) => {
    console.log(goodsId)
    return new SuccessModel({
        data: goodsDetail
    })
}

module.exports = {
    getGoodsList, getGoodsDetail, test
}