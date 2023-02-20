import PropTypes from 'prop-types'

import { FilterWrapper } from "./Filter.styled";

export const Filter = ({ handleChange, filterValue }) => {
    return (
        <FilterWrapper>
            Find contacts by name
            <input onChange={handleChange}
                value={filterValue}
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </FilterWrapper>
    )
};

Filter.propTypes = {
    handleChange: PropTypes.func.isRequired,
    filterValue: PropTypes.string.isRequired,
}