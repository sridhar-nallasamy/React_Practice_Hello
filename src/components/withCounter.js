import React from 'react'

const withCounter = (WrappedComponent, incrementNum) => {
    class WithCounter extends React.Component {

        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        handler = () => {
            this.setState(prevState => {
                return { count: prevState.count + incrementNum }
            })
        }

        render() {
            console.log(this.props.name);
            return <WrappedComponent
            count={this.state.count}
            handler={this.handler}
            {... this.props} />
        }
    }
    return WithCounter
}

export default withCounter