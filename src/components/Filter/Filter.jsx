import PropTypes from 'prop-types';
import { FieldInput } from './Filter.styled';

export const Filter = ({ filter, onFilterChange }) => {
    const onInputChange = e => {
        onFilterChange(e.target.value);
    };

    return (
        <>
            <span>Find contacts by name</span>
            <FieldInput
                onChange={onInputChange}
                value={filter}
                type="text"
                name="search"
            ></FieldInput>
        </>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
};
