import PropTypes from 'prop-types'

import { ContactFormWrapper } from "./ContactForm.styled";

export const ContactForm = ({ addContact, handleChange }) => {
    


    return (
        <ContactFormWrapper onSubmit={addContact}>
            <label>
                Name
                <input onChange={handleChange}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label>
                Number
                <input onChange={handleChange}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button type="submit">Add contact</button>
        </ContactFormWrapper>
    )
};

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired, 
}