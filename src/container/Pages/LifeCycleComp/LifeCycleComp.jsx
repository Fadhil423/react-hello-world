// Libraries
import React, {Component, Fragment} from 'react';

// Style
import './LifeCycleComp.css'

// Class Component LifeCycleComp
class LifeCycleComp extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 1
        }
        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps');
        return null;
    }

    componentDidMount(){
        console.log('ComponentDidMount');
        /*setTimeout(() => {
            this.setState({
                count : 2
            })
        }, 3000)*/
        
    }

    shouldComponentUpdate(nextProps, nextState){
        console.group('shouldComponentUpdate');
        console.log('nextProps : ',nextProps);
        console.log('nextState', nextState);
        console.groupEnd();
        if(nextState.count >= 4){
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, nextState){
        console.log('getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('ComponentDidUpdate');
    }

    componentWillUnmount(){
        console.log('ComponentWillUnmount');
    }

    changeCount = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render (){
        console.log('Render');
        return (
            <Fragment>
                <p>Halaman LifeCycle</p>
                <hr />
                <button className="btn" onClick={this.changeCount}>Component Button {this.state.count}</button>
            </Fragment>
            
        )
    }
}

export default LifeCycleComp;