import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { _fetchMovieDetail } from '../../actions';
import { BackToHomeButton } from '../../components/BackToHomeButton';
import styles from './detail.module.css';

export class Detail extends Component {

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string,
        })
    }

    state = {
        movie: {},
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        _fetchMovieDetail(id, this._onMovieDetails);
    }

    _onMovieDetails = movie => {
        this.setState({ movie })
    }

    render() {
        const { Title, Poster, Actors, Plot } = this.state.movie;
        return (
            <div className={styles.detailContainer}>
                <div className={styles.detailInsideContainer}>
                    <div className={styles.poster}>
                        <img src={Poster}  alt='Poster Detail' />
                    </div>
                    <div className={styles.detailContent}>
                        <h1 className={styles.titleMovie}>{Title}</h1>
                        <p>{Actors}</p>
                        <p>{Plot}</p>
                    </div>
                    <BackToHomeButton>
                        Search new movie
                    </BackToHomeButton>
                </div>
            </div>
        );
    }
}

Detail.displayName = "Detail";