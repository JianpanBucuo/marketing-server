const axios = require('axios')
const qs = require('qs')

class HttpRequest {
    constructor() {
        this.baseURL = ''
    }
    mergeConfig (options) {
        return Object.assign({
            withCredentials: 'include',
            baseURL: this.baseURL,
            method: 'POST',
            data: {},
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Accept: 'application/json'
            }
        }, options)
    }
    async request (options) {
        options = this.mergeConfig(options)
        if (options.headers['Content-Type'] !== 'multipart/form-data') {
            options.data = qs.stringify(options.data)
        }
        const instance = axios.create()
        const response = await instance(options)
        return response.data
    }
}



module.exports = {
    HttpRequest
}