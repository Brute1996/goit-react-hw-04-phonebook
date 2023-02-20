import { Component } from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";


export class App extends Component {
  
  state = {
  contacts: [],
    filter: '',
  };

  componentDidMount() {
    this.setState({
      contacts: JSON.parse(localStorage.getItem('savedContacts')) || []
    })
  }

  componentDidUpdate() {
    localStorage.setItem('savedContacts', JSON.stringify(this.state.contacts))
  }

  handleChange = (e) => {
    const {name, value} = e.target

    this.setState({
      [name]: value
    })
  };


  filteredContacts = () => {
    const { contacts, filter } = this.state

    const normlizeFilter = filter.toLowerCase();
    
    return contacts.filter(contact => contact.name.toLowerCase().includes(normlizeFilter));
  };


  addContact = (e) => {
    e.preventDefault();

    const { contacts, name, number } = this.state

    if (contacts.find(contact => contact.name === name)) {
      e.target.reset()
      return alert(`${name} already in contacts.`)
    }

    const contactData = [{
      name: name,
      number: number,
      id: nanoid(),
    }];
    

    this.setState(
      {
        contacts: [...contacts, ...contactData]
      });
    
    e.target.reset()
  };

  deleteContact = (contactId) => {
    
    this.setState( ({contacts}) => {
      return {
        contacts: contacts.filter(contact => contact.id !== contactId)
      }
    })

  };

  render() {

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
        <ContactForm addContact={this.addContact}
          handleChange={this.handleChange}/>
        <h2 style={{ margin: 30 }}>Contacts</h2>
        <Filter
          handleChange={this.handleChange}
          filterValue={this.state.filter} />
        <ContactList
          contacts={this.filteredContacts()}
          deleteContact={this.deleteContact} />
      </div>
    );
  };
};