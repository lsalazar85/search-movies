import React, { Component } from 'react';
import { Title } from '../../components/Title';
import { SearchForm } from '../../components/SearchForm';
import { Emoji } from '../../components/Emoji';
import { MoviesList } from '../../components/MoviesList';

class Home extends Component {

    state = {
        results : [],
        usedSearch: false,
    }
    
    handleResults = results => {
        this.setState({ results, usedSearch: true });
    }
    
    renderMovies = results => {
        return results.length === 0 ? 
        <span>Sorry <Emoji symbol="😢"/> Movie Not Found </span> :
        <MoviesList movies={results} /> 
    }

    render() {
        const { results, usedSearch } = this.state;
        return (
          <React.Fragment>
            <Title>
                Search Movies
            </Title>
            <SearchForm onResults={this.handleResults} />
            {
              usedSearch ? this.renderMovies(results) :
              <small>Use the form to search a movie</small>
            }
            </React.Fragment>
        );
    }
}

Home.displayName = "Home";

export default Home;
