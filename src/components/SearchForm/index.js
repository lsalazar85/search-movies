import React, { Component } from 'react';
import PropTypes from "prop-types";
import { fetchApi } from '../../actions';
import styles from "./searchForm.module.css";

export class SearchForm extends Component {
    static propTypes = {
        onResults: PropTypes.func.isRequired,
    }

    state = {
        inputMovie: "",
    }

    handleChange = e => {
        this.setState({ inputMovie: e.target.value });
    }

    handleSubmit = e => {
        const { inputMovie } = this.state;
        const { onResults } = this.props;
        e.preventDefault();
        fetchApi(inputMovie, onResults);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className={styles.searchForm}>
                    <div className={styles.inputSearch}>
                        <input 
                            type="text" 
                            placeholder="Movie to search..." 
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className={styles.searchBtn}>
                        <button>
                            Search
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

SearchForm.displayName = "SearchForm";
