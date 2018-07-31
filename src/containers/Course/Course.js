import React, { Component } from 'react';
import QueryString from 'query-string';

class Course extends Component {
    render () {
        const qs = QueryString.parse(this.props.location.search);
        return (
            <div>
                <h1>{ qs.title }</h1>
                <p>You selected the Course with ID: { this.props.match.params.id }</p>
            </div>
        );
    }
}

export default Course;