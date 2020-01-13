import React, { Component } from 'react';
import { Title } from '../../../components/Title';
import { SearchForm } from '../../SearchForm';
import { Emoji } from '../../../components/Emoji';
import { MoviesList } from '../../MoviesList';


class Home extends Component {

    state = {
        results : [],
        usedSearch: false,
    }
    
    _handleResults = results => {
        this.setState({ results, usedSearch: true });
    }
    
    _renderMovies = results => {
        if(results.length === 0){
           return <span>Sorry <Emoji symbol="😢"/> Movie Not Found </span>
        } else {
          return  <MoviesList movies={results} /> 
        }
    }

    render() {
        const { results, usedSearch } = this.state;
        return (
          <React.Fragment>
            <Title>
                Search Movies
            </Title>
            <SearchForm onResults={this._handleResults} />
            {
              usedSearch ? this._renderMovies(results) :
              <small>Use the form to search a movie</small>
            }
            </React.Fragment>
        );
    }
}

Home.displayName = "Home";

export default Home;
