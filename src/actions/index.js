import { API_URL, API_KEY } from "../constants";

// Fetch Api Data List Home function
export const fetchApiDataList = async (inputMovie, onResults) => {
    try {
        await fetch(`${API_URL}${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then( results => {
                const { Search = [] } = results;
                onResults(Search);
            })
    } catch(e) {
        console.log(e)
    }
}

//Fetch Movie Details function
export const fetchMovieDetail = async (id, onMovieDetails) => {
    try {
        await fetch(`${API_URL}${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then( movie => {
                onMovieDetails(movie)
            })
    } catch(e) {
        console.log(e)
    }
}