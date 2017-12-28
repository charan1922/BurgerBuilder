import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import Actions
import * as ActionCreators from '../actions/actionCreators';

//import Main component
import Main from './Main';


function mapStateToProps(state){
console.log('mapstate')
    return {
        posts:state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch){
    console.log('dispatch')
    return bindActionCreators(ActionCreators, dispatch)
}



const App = connect(mapStateToProps,mapDispatchToProps)(Main);

export default App;