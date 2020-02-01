import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {

    render() {
        const { count, handler } = this.props
        return <button onClick={handler}>{this.props.name} Clicked {count} time's.</button>
    }
}

export default withCounter(ClickCounter, 5)
