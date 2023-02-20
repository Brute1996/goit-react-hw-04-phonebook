import PropTypes from 'prop-types'

import { ContactListItem } from "./ContactListItem.styled";

export const ContactItem = ({ name, number, deleteContact }) => {
    return (
        <ContactListItem>
            <p>{name}:<span className="number">{number}</span></p> <button className="delete-button" onClick={deleteContact} type="button">Delete</button>
        </ContactListItem>
    );
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
}