import { observable, action, runInAction, decorator } from 'mobx';

const URL = 'https://musicdemons.com/api/v1/person/organic-search';

@decorator class Artists {
    @observable status = 'initial';
    @observable artists = [];
    @observable temp = 'john';
    @observable error = null;

    @action
    fetchArtistsData = async name => {
        this.status = 'pending';
        this.artists = [];
        this.temp = name.replace(/[^\w\s]/, '');
        try {
            const response = await fetch(`${URL}/${name}`);
            const artists = await response.json();
            this.setArtists(artists);
        } catch(error) {
            runInAction(() => {
                this.error = error;
                this.status = 'error';
                this.temp = '';
            });
        }
    }

    @action
    setArtists = (artists) => {
        this.status = 'success';
        this.artists = artists;
    }
}

export default Artists;