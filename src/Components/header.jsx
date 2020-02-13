import React, { Component } from 'react';
import {connect} from 'react-redux';
import {INCREMENT_SUCCESS, DECREMENT_SUCCESS} from '../redux/actionTypes/index';

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'akbar'
        }
    }
    render() {
    const {count} = this.props.counters;
        return (
            <div>
                 {count}
                 <button onClick={()=>this.props.increment()}>+</button><button onClick={()=>this.props.decrement()}>-</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    counters:state.counters
})

const mapDispatchToProps =(dispatch)=>{
 return{
     increment(){
         dispatch({type:INCREMENT_SUCCESS})
     },
     decrement(){
         dispatch({type:DECREMENT_SUCCESS})
     }
 }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);