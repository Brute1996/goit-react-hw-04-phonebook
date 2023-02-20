import PropTypes from 'prop-types'
import { ConactListWrapper } from "./ContactList.styled";
import { ContactItem } from "components/ContactListItem/ContactListItem";

export const ContactList = ({ contacts, deleteContact }) => {
    return (
        <ConactListWrapper>
            {contacts.map(({ name, id, number }) => {
                return <ContactItem
                    key={id}
                    name={name}
                    number={number}
                    deleteContact={() => deleteContact(id)} /> 
            })}
        </ConactListWrapper>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired).isRequired,
        
    deleteContact: PropTypes.func.isRequired,
};
