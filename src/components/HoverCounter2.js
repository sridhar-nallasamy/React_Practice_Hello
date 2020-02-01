import React, { Component } from 'react'

class HoverCounter2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCounter = () => {
        this.setState((prevState) => {
            return { count: prevState.count + 1 }
        })
    }

    render() {
        const { count } = this.state
        return (
            <h2 onMouseOver={this.incrementCounter}>Hovered {count} times.</h2>
        )
    }
}

export default HoverCounter2
