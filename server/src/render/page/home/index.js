import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGoodsList } from '../../store/main/actions'
// import './style.css'
class Home extends Component {
    render () {
        return (
            <div>
                <h3>home</h3>
                {this.renderList()}
            </div>
        )
    }
    renderList () {
        const { mainData } = this.props
        console.log(this.props)
        return mainData.map((v, i) => {
            return (
                <div key={v.sortNo}>
                    <img src={v.commdty.listImageUrl} />
                    <p><span>{v.commdty.name}</span><span>{v.commdty.price}</span></p>
                </div >
            )
        })
    }
}
Home.loadData = (store) => {
    return store.dispatch(getGoodsList())
}

const mapStateToProps = (state) => {
    console.log(state.main.mainData)
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