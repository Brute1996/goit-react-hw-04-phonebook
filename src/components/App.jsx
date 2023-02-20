import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";


export const App = () => {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('savedContacts')) ?? []);

  const handleChange = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case 'name':
        setName(value)
        break;
      
      case 'number':
        setNumber(value)
        break;
      
      case 'filter':
        setFilter(value)
        break;
      
      default:
        return
    }
  }

  const addContact = (e) => {
  e.preventDefault();

  if (contacts.find(contact => contact.name === name)) {
    e.target.reset()
    return alert(`${name} already in contacts.`)
  }

  const contact = [{
    name: name,
    number: number,
    id: nanoid(),
  }];
  
    setContacts(state => [...state, ...contact])
  
    e.target.reset()
  
  };

  const filteredContacts = () => {
    const normlizeFilter = filter.toLowerCase();
    
    return contacts.filter(contact => contact.name.toLowerCase().includes(normlizeFilter));
  };

  const deleteContact = (contactId) => {
    setContacts(state => state.filter(contact => contact.id !== contactId))
  };

  // add contacts to localstor
  useEffect(() => {
    localStorage.setItem('savedContacts', JSON.stringify(contacts))
  }, [contacts]);


  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 26,
        color: '#010101'
      }}
    >
      <h1 style={{margin: 30}}>Phonebook</h1>
      <ContactForm addContact={addContact}
        handleChange={handleChange}/>
      <h2 style={{ margin: 30 }}>Contacts</h2>
      <Filter
        handleChange={handleChange}
        filterValue={filter} />
      <ContactList
        contacts={filteredContacts()}
        deleteContact={deleteContact} />
    </div>
  );
};