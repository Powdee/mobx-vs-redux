import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

@inject('artistsStore')
@observer
export default class From extends Component {
    onSubmitForm = e => {
        e.preventDefault();
        const name = this.input.value;
        this.props.artistsStore.fetchArtistsData(name);
    }
    render() {
        const { name } = this.props.propsartistsStore;
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