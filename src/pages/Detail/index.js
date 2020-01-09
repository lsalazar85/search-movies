import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchMovieDetail } from '../../actions';
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
        fetchMovieDetail(id, this.onMovieDetails);
    }

    onMovieDetails = movie => {
        this.setState({ movie })
    }

    render() {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;
        return (
            <div className={styles.detailContainer}>
                <BackToHomeButton/>
                <div className={styles.poster}>
                    <img src={Poster}  alt='Poster Detail' />
                </div>
                <div className={styles.detailContent}>
                    <h1 className={styles.titleMovie}>{Title}</h1>
                    <span>{Actors}</span>
                    <span>{Metascore}</span>
                    <span>{Plot}</span>
                </div>
            </div>
        );
    }
}

Detail.displayName = "Detail";