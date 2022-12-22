import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BtnEventComponent extends Component {
    constructor(props) {
        super(props);
        //state 초기화
        this.state = {count: 0};
    }
    componentWillMount() {
        this.increaseCount = this.increaseCount.bind(this);
    }
    increaseCount() {
        //state 변경 let count = this.state.count;
        this.setState(prevState => ({
            count: prevState.count+1,
        }));
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    
    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <p>카운트: {this.state.count}</p>
                <button onClick={this.increaseCount}>카운트 증가</button>
            </div>
        );
    }
}

BtnEventComponent.propTypes = {

};

export default BtnEventComponent;