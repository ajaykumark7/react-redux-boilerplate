import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    incrementValue = () => {
        /**
        * STEP 8: Here, we want to perform the INCREMENT action. But. we cannot pass an action directly to a reducer. 
        * Instead, we use the dispatch() method to do this. But how is dispatch(), which is a method of Redux store, available inside this component?
        * This is because connect() injects the dispatch() method as part of props into the component that it wraps.
        * Remember that the javascript object that is being dispatched must contain a property called 'type'. 
        * This is simply to let the reducer know which action is to be performed, and also the inputs for that action(which is optional)  
        */

        this.props.dispatch({ type: "INCREMENT" });
    }

    decrementValue = () => {
        this.props.dispatch({ type: "DECREMENT" });
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementValue}>INCREMENT</button>
                {/* STEP 2: Once you connect your component to a redux store, all the values it requires will be passed to it via props.
                This is because once you use Redux as your state management tool, keeping local component states is not recommended, so as to maintain a 'single source of truth'  
                */}
                <p>{this.props.count}</p>
                <button onClick={this.decrementValue}>DECREMENT</button>
            </div>

        )

    }
}

const mapStateToProps = (state) => ({
    count: state.count
});

/*
STEP 1: Connect your component to Redux store by using connect() method. 
Here, we see 2 function calls(denoted by 2 pairs of () ) because connect() is a higher-order function, which means that it returns another function 
*/

/*
STEP 3: A Redux store might be storing multiple values from different components at any point in time.
To let it know precisely which of those values you want to be passed into your component, you need to pass to the redux store
a function which maps a redux state variable to the corresponding prop of the component
*/
export default connect(mapStateToProps)(Counter);