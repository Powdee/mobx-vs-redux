import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArtistsData } from '../action';

class Form extends Component {
    static propTypes = {
        name: PropTypes.string,
        fetchArtistsData: PropTypes.func.isRequired,
    }
    onSubmitForm = e => {
        e.preventDefault();
        const name = this.input.value;
        this.input.value = '';
        this.props.fetchArtistsData(name);
    }
    render() {
        const { name } = this.props; 
        return (
            <form className="form" onSubmit={(e) => this.onSubmitForm(e)} >
                <input
                    type="text"
                    placeholder="Enter search name"
                    ref={input => {
                        this.input = input;
                    }}
                />
                <h3> Current searched name: <b>{name.toUpperCase()}</b></h3>
            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    name: state.temp,
});

const dispatchStateToProps = (dispatch) => ({
    fetchArtistsData: (name) => dispatch(fetchArtistsData(name))
});

export default connect(mapStateToProps, dispatchStateToProps)(Form);