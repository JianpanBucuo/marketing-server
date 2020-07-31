import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGoodsList } from '../../store/main/actions'
class Home extends Component {
    render () {
        return (
            <h3>home</h3>
        )
    }
}
Home.loadData = (store) => {
    return store.dispatch(getGoodsList())
}

const mapStateToProps = (state) => {
    return {
        mainData: state.main.mainData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getList () {
            dispatch(getGoodsList())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)