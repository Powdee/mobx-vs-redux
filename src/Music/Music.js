import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import Artist from './Artist';
import { fetchArtistsData } from '../action';

class Music extends Component {
    componentDidMount() {
        this.props.fetchArtistsData(this.props.temp);
    }
    render() {
        const { status, artists, error } = this.props;
        return (
            <Fragment>
                <header>
                    <h1>Artists Search</h1>
                    <Form />
                </header>
                {status === 'pending' && (
                    <Fragment>
                        <div className="circle item0"></div>
                        <div className="circle item1"></div>
                        <div className="circle item2"></div>
                    </Fragment>
                )}
                {status === 'success' &&
                    artists.length === 0 && (
                        <h2> No Results :/ </h2>
                )}
                {(status === 'error' || error) && <h2> Oops... error :( </h2> }
                <section>
                    {artists.map(({id, born, first_name, last_name }, i) => 
                        <Artist
                            key={id}
                            born={born}
                            firstName={first_name}
                            lastName={last_name}
                        />
                    )}
                </section>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    status: state.status,
    artists: state.artists,
    error: state.error,
    temp: state.temp,
});

const dispatchStateToProps = (dispatch) => ({
    fetchArtistsData: (name) => dispatch(fetchArtistsData(name))
});

export default connect(mapStateToProps, dispatchStateToProps)(Music);