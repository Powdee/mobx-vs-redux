import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Artist extends Component {
    static propTypes = {
        id: PropTypes.number,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        born: PropTypes.string,
    }
    render() {
        const { id, firstName, lastName, born } = this.props;
        return(
            <Fragment key={id}>
                <div className="artist">
                    <h2>{firstName} {lastName}</h2>
                    <p>{born && (
                        <Fragment>Born: {born}</Fragment>
                    )}</p>
                </div>
            </Fragment>
        )
    }
}
