import React, { Component } from 'react';
import { Title } from "./components/Title";
import { SearchForm } from "./components/SearchForm";
import { MoviesList } from './components/MoviesList';
import { Emoji } from "./components/Emoji";
import styles from "./App.module.css";



class App extends Component {

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

  render(){
    const { results, usedSearch } = this.state;
    return (
      <div className={styles.App}>
        <Title>
            Search Movies
        </Title>
        <SearchForm onResults={this.handleResults} />
        {
          usedSearch ? this.renderMovies(results) :
          <small>Use the form to search a movie</small>
        }
        </div>
    );
  }
}

App.displayName = "App";

export default App;