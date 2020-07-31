import * as constant from './actionTypes'
const defaultState = {
    mainData: [{ a: 1 }]
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case constant.getGoodsListType:
            return Object.assign({}, state, { mainData: action.data })
    }
    return state
}