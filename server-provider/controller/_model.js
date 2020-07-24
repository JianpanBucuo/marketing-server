class BaseModel {
    constructor({ code, data = {}, msg }) {
        this.code = code
        this.data = data
        this.msg = msg
    }
}

class SuccessModel extends BaseModel {
    constructor({ data = {} }) {
        super({
            code: '0000',
            msg: '成功',
            data
        })
    }
}

class ErrorModel extends BaseModel {
    constructor({ code, msg, data }) {
        super({
            code, msg, data
        })
    }
}
module.exports = {
    ErrorModel,
    SuccessModel
}