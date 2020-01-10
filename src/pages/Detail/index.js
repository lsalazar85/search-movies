import React, { Component } from 'react';
import { shape, object, bool, string }from 'prop-types';
import { isEmpty } from 'lodash';
import { _fetchMovieDetail } from '../../actions';
import { BackToHomeButton } from '../../components/BackToHomeButton';
import { Loader } from '../../components/Loader';
import PosterDefault from './notimage.png';

import styles from './detail.module.css';

class Detail extends Component {

    static propTypes = {
        match: shape({
            params: object,
            isExact: bool,
            path: string,
            url: string,
        })
    }

    static defaultProps = {
        poster: PosterDefault,
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
        const { movie } = this.state;
        const { Title, Poster, Actors, Plot } = movie;
        return (
            <div className={styles.detailContainer}>
                <div className={styles.detailInsideContainer}>
                    {
                        isEmpty(movie) ? <Loader/> : (
                            <React.Fragment>
                                <div className={styles.poster}>
                                    <img src={Poster === 'N/A' ? PosterDefault : Poster}  alt='Poster Detail' />
                                </div>
                                <div className={styles.detailContent}>
                                    <h1 className={styles.titleMovie}>{Title}</h1>
                                    <p>{Actors}</p>
                                    <p>{Plot}</p>
                                </div>
                                <BackToHomeButton>
                                    Search new movie
                                </BackToHomeButton>
                            </React.Fragment>
                        )
                    }
                </div>
            </div>
        );
    }
}

Detail.displayName = "Detail";

export default Detail;