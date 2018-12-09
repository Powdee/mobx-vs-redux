import React, { Component, Fragment } from 'react';
import Form from './Form';
import Artist from './Artist';
import { inject, observer } from 'mobx-react';
import { dec } from 'mobx';

@inject('artistsStore')
@observer
@dec class Music extends Component {
    componentDidMount() {
        this.props.artistsStore.fetchArtistsData(this.state.temp);
    }
    render() {
        const { status, artists, error } = this.state.artistsStore;
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

export default Music