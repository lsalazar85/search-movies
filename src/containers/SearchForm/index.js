import React, { Component } from 'react';
import { func } from "prop-types";
import { _fetchApiDataList } from '../../actions';
import { ButtonForm } from '../../components/ButtonForm';
import styles from "./searchForm.module.css";


export class SearchForm extends Component {
    static propTypes = {
        onResults: func.isRequired,
    }

    _handleChange = e => {
        this.props.setInputValue(e.target.value);
    }

    _handleSubmit = e => {
        const { inputValue, onResults } = this.props;
        e.preventDefault();
        _fetchApiDataList(String(inputValue), onResults);
    }

    render() {
        console.log(this.props.inputValue)
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

