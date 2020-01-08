import { API_URL, APY_KEY } from "../constants";

// Fetch Api function
export const fetchApi = async (inputMovie, onResults) => {
    try {
        await fetch(`${API_URL}${APY_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then( results => {
                const { Search = [] } = results;
                onResults(Search);
            })
    } catch(e) {
        console.log(e)
    }
}
