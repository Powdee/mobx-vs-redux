import * as React from 'react';
import { connect } from 'react-redux';
import { fetchArtistsData } from '../action';

interface IFormProps {
    name?: any;
    fetchArtistsData(name: string | null): void;
}

class Form extends React.Component<IFormProps> {
    componentDidMount() {
        this.focus();
    }
    private myRef = React.createRef<HTMLInputElement>()
    public focus = () => {
        const node = this.myRef.current;
        if (node) {
            node.focus();
        }
    }
    public onSubmitForm = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        const name = this.myRef.current && this.myRef.current.value;
        this.props.fetchArtistsData(name);
    }
    public render() {
        const { name } = this.props; 
        return (
            <form className="form" onSubmit={(e: any) => this.onSubmitForm(e)} >
                <input
                    type="text"
                    placeholder="Enter search name"
                    ref={this.myRef}
                />
                <h3> Current searched name: <b>{name.toUpperCase()}</b></h3>
            </form>
        );
    }
}

const mapStateToProps = (state: any) => ({
    name: state.temp,
});

const dispatchStateToProps = (dispatch: any) => ({
    fetchArtistsData: (name: string) => dispatch(fetchArtistsData(name))
});

export default connect(mapStateToProps, dispatchStateToProps)(Form);