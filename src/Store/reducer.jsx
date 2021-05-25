/**
 * STEP 6: Create the reducer. Whenever an action occurs, redux calls the reducer with the current state and the action that occured,
 * and the reducer function is responsible for returning the new state to the Redux store.
 * An initialState is used by the reducer to prevent the issue of state being 'undefined' the first time the store is loaded
 * The same values that used to be passed to the component's constructor can be used here.
 * state=initialState is ES6 syntax which assigns the value of initialState to state when state is 'undefined'
 */

const initialState = {
    count: 0
}

/**
 * If you check closely, you will realize that there is no setState() being called inside the reducer to set its state to the new value
 * But still, when the state is incremented/decremented by 1. This is because reducers do this tracking internally.
 */
function reducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1
            };
        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1
            };
        /**
         * The default case is always required for all reducers. This case must return the entire state, unchanged.
         * This is because there can be multiple reducers for the same Redux store,
         * and the way Redux works is that it dispatches EACH AND EVERY action to ALL the reducers. 
         * Hence, each reducer needs a mechanism to return a value for actions that it cannot recognize, 
         * otherwise it would return 'undefined' which could lead to errors 
         */
        default:
            return state;
    };

}

export default reducer;