import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BtnEventComponent extends Component {
    constructor(props) {
        console.log('순서-constructor');
        super(props);
        //state 초기화-수정
        this.state = {count: props.count};
        this.clickEvent = this.clickEvent.bind(this);
        /* getDerivedStateFromProps 사용시 */
        /* this.state = {}; 
        this.clickEvent = this.clickEvent.bind(this); */
    }
    componentWillMount() {
        console.log('순서-componentWillMount');
    }
    clickEvent() {
        //state 변경 let count = this.state.count;
        this.setState(prevState => ({
            count: prevState.count+1,
        }));
    }
    /* getDerivedStateFromProps 사용시 */
    /* clickEvent() { 
        //state 변경 let count = this.state.count;
        this.setState(({newCount}) => ({
            newCount: newCount+1,
        }));
    } */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('순서-shouldComponentUpdate');
        return true;
    }
    
    componentDidMount() {
        console.log('순서-componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('순서-componentWillReceiveProps');
        this.setState({count: nextProps.count});
    }
    /* getDerivedStateFromProps 사용시 */
    /* static getDerivedStateFromProps(props, state) { 
        const {count} = props;
        return {
            count: count,
            newCount: count === state.count?state.newCount:count,
        } 
    } */
    
    componentWillUpdate(nextProps, nextState) {
        console.log('순서-componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('순서-componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('순서-componentWillUnmount');
    }

    render() {
        console.log('순서-render');
        return (
            <div>
                <p>카운트: {this.state.count}</p> {/* getDerivedStateFromProps 사용시 this.state.newCount */}
                <button onClick={this.clickEvent}>카운트 증가</button>
            </div>
        );
    }
}

BtnEventComponent.propTypes = {

};

export default BtnEventComponent;