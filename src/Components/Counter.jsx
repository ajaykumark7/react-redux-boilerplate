import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    incrementValue = () => {
        this.setState({
            value: this.state.value + 1
        })
    }

    decrementValue = () => {
        this.setState({
            value: this.state.value - 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementValue}>INCREMENT</button>
                <p>{this.state.value}</p>
                <button onClick={this.decrementValue}>DECREMENT</button>
            </div>

        )

    }
}

export default Counter;