const URL = 'https://musicdemons.com/api/v1/person/organic-search';

enum CounterActionTypes {
    PENDING_DATA = "PENDING_DATA",
    SUCCESS_DATA = "SUCCESS_DATA",
    ERROR_DATA = "ERROR_DATA",
}

const fetchArtistsData = (name: any) => {
    return async (dispatch: any): Promise<void> => {
        dispatch({
            type: CounterActionTypes.PENDING_DATA,
            name: name.replace(/[^\w\s]/, ''),
        });
        try {
            const response = await fetch(`${URL}/${name}`);
            const artists = await response.json();
            dispatch({
                type: CounterActionTypes.SUCCESS_DATA,
                artists,
            });
        } catch(error) {
            dispatch({
                type: CounterActionTypes.ERROR_DATA,
                error,
            });
        }
    }
};

export { fetchArtistsData };