import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * rcfc(reactClassComponentWithMethods)로 9개의 생명주기 함수가 자동 추가 된다
 */
class LifecycleComponent extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

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

            </div>
        );
    }
}

LifecycleComponent.propTypes = {

};

export default LifecycleComponent;