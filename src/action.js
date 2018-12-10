const URL = 'https://musicdemons.com/api/v1/person/organic-search';

const fetchArtistsData = (name) => {
    return async (dispatch) => {
        dispatch({
            type: 'PENDING_DATA',
            name: name.replace(/[^\w\s]/, ''),
        });
        try {
            const response = await fetch(`${URL}/${name}`);
            const artists = await response.json();
            dispatch({
                type: 'SUCCESS_DATA',
                artists,
            });
        } catch(error) {
            dispatch({
                type: 'ERROR_DATA',                
                error,
            });
        }
    }
};

export { fetchArtistsData };