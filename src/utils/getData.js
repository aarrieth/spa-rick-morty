const API_URL = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
    const api_url = id ? `${API_URL}${id}` : API_URL;
    try {
        const resolve = await fetch(api_url);
        const data = resolve.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export default getData;