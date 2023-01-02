import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieListComponent extends Component {
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
        //return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        const memberList = [
            { name: '김일국', email: 'admin@test.com'},
            { name: '사용자', email: 'user@test.com'},
        ];
        return (
            <div>
                {memberList.map((member) => <div key={member.email}>{member.name}</div>)}
            </div>
        );
    }
}

MovieListComponent.propTypes = {

};

export default MovieListComponent;