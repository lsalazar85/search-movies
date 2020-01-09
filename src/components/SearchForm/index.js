import React, { Component } from 'react';
import PropTypes from "prop-types";
import { _fetchApiDataList } from '../../actions';
import { ButtonForm } from '../ButtonForm';
import styles from "./searchForm.module.css";


export class SearchForm extends Component {
    static propTypes = {
        onResults: PropTypes.func.isRequired,
    }

    state = {
        inputMovie: "",
    }

    _handleChange = e => {
        this.setState({ inputMovie: e.target.value });
    }

    _handleSubmit = e => {
        const { inputMovie } = this.state;
        const { onResults } = this.props;
        e.preventDefault();
        _fetchApiDataList(inputMovie, onResults);
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className={styles.searchForm}>
                    <div className={styles.inputSearch}>
                        <input 
                            type="text" 
                            placeholder="Movie to search..." 
                            onChange={this._handleChange}
                        />
                    </div>
                    <div className={styles.searchBtn}>
                       <ButtonForm>
                           Search
                       </ButtonForm>
                    </div>
                </div>
            </form>
        );
    }
}

SearchForm.displayName = "SearchForm";
