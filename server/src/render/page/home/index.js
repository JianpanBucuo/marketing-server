import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGoodsList } from '../../store/main/actions'
import style from './style.css'

class Home extends Component {
    componentWillMount () {
        if (this.props.staticContext) {
            this.props.staticContext.css = style._getCss()
        }
    }
    render () {
        return (
            <div >
                <h3 className={style.test} >home</h3>
                <section className={style['list-container']} >
                    {this.renderList()}
                </section>
            </div>
        )
    }
    renderList () {
        const { mainData } = this.props
        return mainData.map((v, i) => {
            return (
                <div className={style['list-item']} key={v.sortNo}>
                    <img src={v.commdty.listImageUrl} />
                    <p className={style['item-text']}><span>{v.commdty.name}</span><span>{v.commdty.price}</span></p>
                </div >
            )
        })
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