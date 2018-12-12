import * as React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import { Artist } from './Artist';
import { fetchArtistsData } from '../action';

interface IMusicProps {
    fetchArtistsData: (name: string | null) => void;
    temp: string;
    status: string;
    artists: any;
    error: string;
}

class Music extends React.Component<IMusicProps> {
    componentDidMount() {
        this.props.fetchArtistsData(this.props.temp);
    }
    public render() {
        const { status, artists, error } = this.props;
        return (
            <React.Fragment>
                <header>
                    <h1>Artists Search</h1>
                    <Form />
                </header>
                {status === 'pending' && (
                    <React.Fragment>
                        <div className="circle item0"></div>
                        <div className="circle item1"></div>
                        <div className="circle item2"></div>
                    </React.Fragment>
                )}
                {status === 'success' &&
                    artists.length === 0 && (
                        <h2> No Results :/ </h2>
                )}
                {(status === 'error' || error) && <h2> Oops... error :( </h2> }
                <section>
                    {artists.map(({id, born, first_name, last_name }: any, i: number) => 
                        <Artist
                            id={i}
                            key={id}
                            born={born}
                            firstName={first_name}
                            lastName={last_name}
                        />
                    )}
                </section>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: any) => ({
    status: state.status,
    artists: state.artists,
    error: state.error,
    temp: state.temp,
});

const dispatchStateToProps = (dispatch: any) => ({
    fetchArtistsData: (name: any) => dispatch(fetchArtistsData(name))
});

export default connect(mapStateToProps, dispatchStateToProps)(Music);