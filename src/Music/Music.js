import React, { Component, Fragment } from 'react';
import Form from './Form';
import Artist from './Artist';

const URL = 'https://musicdemons.com/api/v1/person/organic-search';

export default class Music extends Component {
    state = {
        status: 'initial',
        artists: [],
        temp: 'john',
        error: null,
    }
    componentDidMount() {
        this.fetchArtistsData(this.state.temp);
    }
    fetchArtistsData = async (name) => {
        this.setState({
            status: 'pending',
            artists: [],
            error: null,
            temp: name.replace(/[^\w\s]/, ''),
        });
        try {
            const response = await fetch(`${URL}/${name}`);
            const artists = await response.json();
            this.setState({
                status: 'success',
                artists,
            });
        } catch(error) {
            this.setState({
                error,
                status: 'error',
                temp: '',
            });
        }
    }
    render() {
        const { status, artists, error, temp } = this.state;
        return (
            <Fragment>
                <header>
                    <h1>Artists Search</h1>
                    <Form fetchArtistsData={this.fetchArtistsData} name={temp}/>
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