import { connect } from 'react-redux';
import { getInputValue } from '../../actions';
import { SearchForm } from '.';


const mapStateToProps = state => {
    return {
        inputValue: state.inputValue,
    }
}

const mapDispatchToProps = dispatch => ({
    setInputValue: value => dispatch(getInputValue(value))
});

const creatConnection = connect(mapStateToProps,mapDispatchToProps)

const SearchFormContainer = creatConnection(SearchForm);

export default SearchFormContainer;