import { API_URL, API_KEY } from "../constants";

// Fetch Api Data List Home function
export const _fetchApiDataList = async (inputMovie, onResults) => {
    try {
        const res = await fetch(`${API_URL}${API_KEY}&s=${inputMovie}`);
        const results = await res.json();
        const { Search = [] } = results;
        onResults(Search);
    } catch(e) {
        console.log(e);
    }
}

//Fetch Movie Details function
export const _fetchMovieDetail = async (id, onMovieDetails) => {
    try {
        const res = await fetch(`${API_URL}${API_KEY}&i=${id}`);
        const movies = await res.json();
        onMovieDetails(movies);
    } catch(e) {
        console.log(e);
    }
}