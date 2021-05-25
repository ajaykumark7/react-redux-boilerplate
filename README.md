Inspired by the brilliant, short tutorial from https://www.youtube.com/watch?v=sX3KeP7v7Kg

Overview of steps to be followed(for detailed comments, see code):
1. Connect the component to redux store & rewrite all .state calls to .props calls
2. Write your mapStateToProps() function
3. Create the store
4. Create the reducer and pass it to the store
5. Wrap whichever component needs access to redux store inside Provider component
6. Create the dispatchers