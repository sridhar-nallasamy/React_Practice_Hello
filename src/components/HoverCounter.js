import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {

    render() {
        const { count, handler } = this.props
        return <h1 onMouseOver={handler}>Hovered {count} times.</h1>
    }
}

export default withCounter(HoverCounter, 10)
